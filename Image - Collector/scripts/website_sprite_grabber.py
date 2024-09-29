import csv
import requests
import os
import shutil

from loguru import logger
from pathlib import Path


# Variables
#Set MON ID number below here.
mon_amount = 946  # Set the last (sprite) ID of the stats sheet here (column A)
sheet_id = "17rpJqvN_AHTA463Q9S8k2ONGBEZvNM47DWqR6RTqy1w"
download_outdated = False  # Set this to True when you need to (re)download the spreadsheet (FileNotFoundError: [Errno 2] No such file or directory: 'stats_sheet.csv')

# Derived variables
csv_url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&id={sheet_id}&gid=0"

if download_outdated:
    # Getting csv
    csv_contents = requests.get(csv_url)

    # Writing contents
    open("stats_sheet.csv", "wb").write(csv_contents.content)

# Opening csv and saving in list
stats_sheet = csv.reader(open("stats_sheet.csv"))
stats_list = list(stats_sheet)
del stats_sheet

# Converting to dictionary
name_to_id = {}
for mon_index in range(mon_amount):
    row = stats_list[mon_index + 2]

    name_to_id.update({row[1]: row[0]})

# Folder initialization
pokescape_folder = Path(os.getcwd() + "/../pokescape_monsters/")
folder_list = os.listdir(pokescape_folder)
missing_sheet_rows = []

# Loop over folders
for f in folder_list:
    if f in name_to_id:
        # If found in sheet: copy to website folder
        shutil.copy(os.path.join(pokescape_folder, f"{f}\\front.png"), Path(os.getcwd() + f"/../website_sprites/Front/{name_to_id[f]}.png"))
        shutil.copy(os.path.join(pokescape_folder, f"{f}\\back.png"), Path(os.getcwd() + f"/../website_sprites/Back/{name_to_id[f]}.png"))
        # Mark as "Folder found"
        name_to_id.pop(f)
    else:
        # Mark as "Folder has no row in stats sheet"
        missing_sheet_rows.append(f)

# Log folders that have no row in stats sheet
if len(missing_sheet_rows):
    logger.error(f"Missing sheet rows:")
    for r in missing_sheet_rows:
        logger.warning(f"Folder name: {r}")

# Log sheet rows that have no sprite folder
if len(name_to_id):
    logger.error(f"Missing sprites:")
    warning_text = "\n"
    for i in name_to_id.items():
        warning_text += f"ID: {i[1]} | {i[0]}\n"
    logger.warning(warning_text)
