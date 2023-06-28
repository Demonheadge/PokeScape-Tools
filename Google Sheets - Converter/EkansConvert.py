# Imports, requires 'json' for this script to work!
import json
from subprocess import call

#File names for the converting input files. (No extensions)
root = ""
initialEVFile = "tsv folder/PokeScape Main Sheet - EV Yeilds"
initialStatsFile = "tsv folder/PokeScape Main Sheet - Stats"
initialLevelFile = "tsv folder/PokeScape Main Sheet - Level-Up Moves"
initialEvolutionFile = "tsv folder/PokeScape Main Sheet - Evolution"
initialTMHMFile = "tsv folder/PokeScape Main Sheet - TM_HM"
initialDexEntriesFile = "tsv folder/PokeScape Main Sheet - Dex Entries"
initialMovesFile = "tsv folder/PokeScape Main Sheet - MOVES"

#File names for the converted output files. (Include extensions)
finalLevelFile = "js folder/PokeScape_LevelUp_Moves.js"
finalStatsFile = "js folder/PokeScape_Stats.js"
finalEVFile = "js folder/PokeScape_EVYeild.js"
finalEvolutionFile = "js folder/PokeScape_Evolution.js"
finalTMHMFile = "js folder/PokeScape_TM_HM.js"
finalDexEntriesFile = "js folder/PokeScape_DexEntries.js"
finalMovesFile = "js folder/MOVES.js"

# Convert Tab Characters to Spaces.
def tabSwap(inputFileName):
    print("  > tabSwap("+inputFileName+")")

    """
    Load the input data, and prepare the output file.
    """
    inFile = open(inputFileName+".tsv",encoding="utf8")
    outFile = open(inputFileName+"_TabModded.csv", "w")    
    buffer = []

    """
    Replace all the Tabs with Spaces in every line.
    """
    for line in inFile:
        buffer.append(line.replace(",", "###").replace("\t",", "))

        
    """
    Add the file footer, and save the new file.
    """
    outFile.writelines(buffer)



# Convert Tabs, to a modified single-lined json format.
def insertData(inputFileName):
    print("  > insertData("+inputFileName+")")

    """
    Load the input data, and prepare the output file.
    """
    inFile = open(inputFileName+"_TabModded.csv")
    outFile = open(inputFileName+"_InsertedDataModded.json", "w")
    buffer = []
    
    """
    Convert each line to a single-lined JSON format.
    """
    for line in inFile:
        buffer.append(json.dumps(line.split(", ")).replace("\\n\"]", "\"]\n"))
        
    """
    Add the file footer, and save the new file.
    """
    outFile.writelines(buffer[0:len(buffer)])


    
# Convert the Json lines for the Level-Up moves to javascript.
def LevelUpToJavaScript(inputFileName, outputFileName):
    print("  > LevelUpToJavaScript("+inputFileName+")")

    """
    Load the input data, and prepare the output file.
    """
    inFile = open(inputFileName+"_InsertedDataModded.json")
    outFile = open(finalLevelFile, "w")
    buffer = []

    """
    Add the file header aand start formatting.
    """
    buffer.append("module.exports = {\n")
    for line in inFile:
        """
        Initial format for each line.
        > Remove All Left-Square Brackets
        > Remove All Right-Square Brackets
        > Remove All Astricks
        > Remove All Double-Quotation Marks
        > Remove All Commas
        > Convert All Question Marks to Quotation Marks
        > Convert All Periods to Commas
        > Add a New-Line to Each Right-Wavy Bracket with a Comma

        """
        line = line\
               .replace("[","")\
               .replace("]","")\
               .replace("*","")\
               .replace("\"","")\
               .replace(",","")\
               .replace("?","\"")\
               .replace(".",",")\
               .replace("},","\n},")
        
        """
        If the line has "Name" in it, it's the 'Mon's name; Otherwise, it's a Move. Format differently.
          > Grab data before the first Colon
          > Replace all Spaces to Underscores
          > Replace all Hyphens to Underscores
          > Add the rest of the data
        """
        if line.find("Name") > -1:
            line = line.replace("  ","")
            line = line[:line.find(":")-1]\
                   .replace(" ", "_")\
                   .replace("-","_")\
                   +line[line.find(":"):]
        else:  
            """
            Not a 'Mon name.
              > Replace the Underscores to Spaces instead.
              > Remove all Spaces.
            """
            line = line.replace("_"," ")\
                        .replace(" ","")

        """
        Fix any line issues, and continue.
          > Replace residual Name Entries.
          > Replace Colon Whitespace issues.
          > Replace Quotation Whitespace issues.
        """
        buffer.append(line\
                      .replace("Name: \"","")\
                      .replace("Name","")\
                      .replace(" : ", ": ")\
                      .replace("\" ", "\"")\
                      .replace(" \",", "\",")\
                      )

    """
    Add the file Footer, and save the file
    """
    buffer.append("\n}")
    outFile.writelines(buffer[0:len(buffer)])



# Convert Most Non-Special Json lines to javascript.
def ConvertMostToJavascript(inputFileName, outputFileName, StartWithLine):
    print("  > ConvertToJavascript('"+inputFileName+"','"+outputFileName+"',"+str(StartWithLine)+")")

    """
    Load the input data, and prepare the output file.
    """
    inFile = open(inputFileName+"_InsertedDataModded.json")
    outFile = open(outputFileName, "w")
    buffer = []

    """
    Add the file header, start the initial counter at 0.
    """
    buffer.append("module.exports = {\n")
    counter = 0

    """
    For each line in the file:
      > Start when the Loop when it matches StartWithLine ID.
      > Add the counter minus StartWithLine
      > Add a comma after each Right-Square bracket.
      > Add one to the counter.
    """
    for line in inFile:
        if counter >= StartWithLine-1:
            buffer.append(str(counter-StartWithLine+1)+": "+line.replace("###", ",").replace("]", "],"))
        counter = counter+1

    """
    Add the file footer, and save the new file.
    """
    buffer.append("\n}")
    outFile.writelines(buffer)



# Convert the Json lines for the TMHM File to javascript.
def ConvertTMHMToJavascript(inputFileName, outputFileName, StartWithLine):
    print("  > ConvertToJavascript('"+inputFileName+"','"+outputFileName+"',"+str(StartWithLine)+")")

    """
    Load the input data, and prepare the output file.
    """
    inFile = open(inputFileName+"_InsertedDataModded.json")
    outFile = open(outputFileName, "w")
    buffer = []

    """
    Add the file header, start the initial counter at 0.
    """
    buffer.append("module.exports = {\n")
    counter = 0

    """
    For each line in the file:
      > Start when the Loop when it matches StartWithLine ID.
      > Add the counter minus StartWithLine
      > Add the Data before the fist Colon, in this case TM##:
      > Replace the first Left-Square bracket with a Quotation-Mark to have the now-missing Colon and space.
      > Add the rest of the data after the Colon.
      > Add a comma after each Right-Square bracket.
      > Fix any whitespacing issues.
      > Add one to the counter.
    """
    for line in inFile:
        if counter >= StartWithLine-1:
            line = line[:line.find(":")].upper().replace("[\"","")+": [\""+\
                   line[line.find(":")+1:].replace("]", "],")
            buffer.append(line.replace(": [\" ", ": [\""))
        counter = counter+1

    """
    Add the file footer, and save the new file.
    """
    buffer.append("\n}")
    outFile.writelines(buffer)

































# Load the converters seperately for DexEntries
def ConvertDexEntries():
    print("ConvertDexEntries()")
    tabSwap(initialDexEntriesFile)
    insertData(initialDexEntriesFile)
    ConvertMostToJavascript(initialDexEntriesFile, finalDexEntriesFile, 2)




# Load the converters seperately for TM / HM
def ConvertTMHM():
    print("ConvertTMHM()")
    tabSwap(initialTMHMFile)
    insertData(initialTMHMFile)
    ConvertTMHMToJavascript(initialTMHMFile, finalTMHMFile, 1)




# Load the converters seperately for Evolution
def ConvertEvolution():
    print("ConvertEvolution()")
    tabSwap(initialEvolutionFile)
    insertData(initialEvolutionFile)
    ConvertMostToJavascript(initialEvolutionFile, finalEvolutionFile, 48)



# Load the converters seperately for EV Yeilds
def ConvertEVs():
    print("ConvertEVs()")
    tabSwap(initialEVFile)
    insertData(initialEVFile)
    ConvertMostToJavascript(initialEVFile, finalEVFile, 3)



# Load the converters seperately for Stats
def ConvertStats():
    print("ConvertStats()")
    tabSwap(initialStatsFile)
    insertData(initialStatsFile)
    ConvertMostToJavascript(initialStatsFile, finalStatsFile, 3)


    
# Load the converters seperately for Level-Up Movesets.
def ConvertLevels():
    print("ConvertLevels()")
    tabSwap(initialLevelFile)
    insertData(initialLevelFile)
    LevelUpToJavaScript(initialLevelFile, finalLevelFile)


    
# Load the converters seperately for MOVES.
def ConvertMoves():
    print("ConvertMOVES()")
    tabSwap(initialMovesFile)
    insertData(initialMovesFile)
    ConvertMostToJavascript(initialMovesFile, finalMovesFile, 2)


# Uncomment the converters you want to run, comment using a # to not run them.
def Start():
    print("Start()")
    #ConvertEVs()
    ConvertStats()
    #ConvertLevels()
    #ConvertEvolution()
    #ConvertTMHM()
    ConvertDexEntries()
    ConvertMoves()

# Start the program!
Start()
# Uncomment if you don't want to auto-run the pokescape_converter node.js script afterwards.
call(["node", "pokescape_converter"])
# Finished! Wait for input from user to close the window.
print("Done!\nPress Enter to continue...")
input()
