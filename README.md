# PokeScape-Tools

How to Files can be found in each folder.


Google Sheets Converter: grabs data from the Google sheet and converts it into a rough format to be inserted into the game.
Image Collecter: Grabs iamges from the mons folder and sorts out the front & back sprites and assigns them their ID's.
Image Slicer: Slices Bigger images up into smaller ones, you can select your size by editing the Master.py




---
These need to be cleaned up to be used correctly.
---

















## PokeScape GBA

PokeScape Helper files for the GBA-Based project.


## Prep-Work

* Download the latest files from [The Google Sheets](https://docs.google.com/spreadsheets/d/17rpJqvN_AHTA463Q9S8k2ONGBEZvNM47DWqR6RTqy1w).
  * While on the sheet you wish to download (e.g. "**Evolution**")
    * Click on **File**
    * Hover-over **Download**
    * Click on **Tab-separated values (.tsv, current sheet)**
* Download and install the latest [Node.js](https://nodejs.org/en/download/).
  * Make sure the **node** command is able to be used in the command prompt.
  * This will be required for the convertors.

* Download and install the latest [Python 3.7+](https://www.python.org/downloads/)
  * This will be required for the convertors.
  * Requires the modules: pathlib, os, pillow, sys, shutil.
    * If not installed, open the Command prompt and type: `pip install (module)`

* Download and install your preferred Git client such as:
  * [Sourcetree](https://www.sourcetreeapp.com/)
  * [Git for Windows](https://git-scm.com/downloads)
  * Some IDEs like Eclipse, Visual Studio, etc have built-in ones.


## Usage

* **EkansConvert**:
  * Place the PokeScape sheet files in the 'tsv folder'.
  * Run **EkansConvert.py** until it's done.
    * Auto-loads *pokescape_convert.js*
    * Requires Node.js and Python.
  * The outputs should be placed 'scripts output'.

* **ImageSplicer**
  * Load the proper images to splice in the root folder of the script.
  * Edit **spriteType** in **SpriteSplicer - Master.py** to the sprite type used. (See comments)
  * Load, and the sprites should be in the **Output** folder.




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.