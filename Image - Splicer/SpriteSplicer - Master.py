import os
from pathlib import Path
from PIL import Image
from PIL import ImageOps
from PIL import ImageDraw
from time import sleep
import sys
import shutil
import glob

def imageCropper(pokemonImage, spriteType, resizing, transparent):
    
    pokemonFolder  =  Path(os.getcwd() + "/output/"+pokemonImage).mkdir(parents= True, exist_ok= True)
    # Create an image
    image = (pokemonImage + ".png")
    
    originalSprite = Image.open(image)
    originalSprite = originalSprite.convert("RGBA")

    width, height = originalSprite.size

    if spriteType == "Battle_Mons":
    
        segments = 4
        segmentWidth = width/segments

        if resizing:
            finalPictureSize = 96
            marginSize = int((finalPictureSize-height)/2)                

        # This is for the front sprite
        frontLeft = 0
        frontRight = segmentWidth

        # This is for the shiny front sprite
        frontShinyLeft = frontRight
        frontShinyRight = frontShinyLeft+segmentWidth

        # This is for the regular back sprite
        backLeft = frontShinyRight
        backRight = frontShinyRight+segmentWidth

        # This is for the shiny back sprite
        backShinyLeft = backRight
        backShinyRight = backShinyLeft+segmentWidth

        # Crops the individual images
        croppedFront = originalSprite.crop((frontLeft, 0, frontRight, height))
        croppedFrontShiny = originalSprite.crop((frontShinyLeft, 0, frontShinyRight, height))
        croppedBack = originalSprite.crop((backLeft, 0, backRight, height))
        croppedShinyBack = originalSprite.crop((backShinyLeft, 0, backShinyRight, height))




            
        # Saves the images to a file
        croppedFront.save(pokemonImage + "_front.png", "PNG")
        croppedFrontShiny.save(pokemonImage + "_front_shiny.png")
        croppedBack.save(pokemonImage + "_back.png")
        croppedShinyBack.save(pokemonImage + "_back_shiny.png")




        # Transparency Clusterfuck...
        resizedFrontA = Image.open(pokemonImage + "_front.png")
        resizedFrontA.convert("RGBA")
        resizedFrontPixelData = resizedFrontA.load()
        resizedFrontData = resizedFrontA.getdata()
        
        if transparent:
            resizedFrontNewData = []
            for item in resizedFrontData:
                if item[0] == resizedFrontPixelData[0,0][0] and item[1] == resizedFrontPixelData[0,0][1] and item[2] == resizedFrontPixelData[0,0][2]:
                    resizedFrontNewData.append((255,255,255,0))
                else:
                    resizedFrontNewData.append(item)
            resizedFrontA.putdata(resizedFrontNewData)
            resizedFrontA.save(pokemonImage + "_front.png", "PNG")

            #

        resizedFrontShinyA = Image.open(pokemonImage + "_front_shiny.png")
        resizedFrontShinyA.convert("RGBA")
        resizedFrontShinyPixelData = resizedFrontShinyA.load()
        resizedFrontShinyData = resizedFrontShinyA.getdata()
        
        if transparent:
            resizedFrontShinyNewData = []
            for item in resizedFrontShinyData:
                if item[0] == resizedFrontShinyPixelData[0,0][0] and item[1] == resizedFrontShinyPixelData[0,0][1] and item[2] == resizedFrontShinyPixelData[0,0][2]:
                    resizedFrontShinyNewData.append((255,255,255,0))
                else:
                    resizedFrontShinyNewData.append(item)
            resizedFrontShinyA.putdata(resizedFrontShinyNewData)
            resizedFrontShinyA.save(pokemonImage + "_front_shiny.png", "PNG")

            ##

        resizedBackA = Image.open(pokemonImage + "_back.png")
        resizedBackA.convert("RGBA")
        resizedBackPixelData = resizedBackA.load()
        resizedBackData = resizedBackA.getdata()
        
        if transparent:
            resizedBackNewData = []
            for item in resizedBackData:
                if item[0] == resizedBackPixelData[0,0][0] and item[1] == resizedBackPixelData[0,0][1] and item[2] == resizedBackPixelData[0,0][2]:
                    resizedBackNewData.append((255,255,255,0))
                else:
                    resizedBackNewData.append(item)
            resizedBackA.putdata(resizedBackNewData)
            resizedBackA.save(pokemonImage + "_back.png", "PNG")

            #

        resizedBackShinyA = Image.open(pokemonImage + "_back_shiny.png")
        resizedBackShinyA.convert("RGBA")
        resizedBackShinyPixelData = resizedBackShinyA.load()
        resizedBackShinyData = resizedBackShinyA.getdata()
        
        if transparent:
            resizedBackShinyNewData = []
            for item in resizedBackShinyData:
                if item[0] == resizedBackShinyPixelData[0,0][0] and item[1] == resizedBackShinyPixelData[0,0][1] and item[2] == resizedBackShinyPixelData[0,0][2]:
                    resizedBackShinyNewData.append((255,255,255,0))
                else:
                    resizedBackShinyNewData.append(item)
            resizedBackShinyA.putdata(resizedBackShinyNewData)
            resizedBackShinyA.save(pokemonImage + "_back_shiny.png", "PNG")

        if resizing:
            
            if transparent:
                marginColor = (0,0,0,0)
            else:
                marginColor = (resizedFrontPixelData[0,0][0], resizedFrontPixelData[0,0][1], resizedFrontPixelData[0,0][2], 255)
            resizedFront = ImageOps.expand(resizedFrontA,border=marginSize,fill=marginColor)

            if transparent:
                marginColor = (0,0,0,0)
            else:
                marginColor = (resizedFrontShinyPixelData[0,0][0], resizedFrontShinyPixelData[0,0][1], resizedFrontShinyPixelData[0,0][2], 255)
            resizedFrontShiny = ImageOps.expand(resizedFrontShinyA,border=marginSize,fill=marginColor)

            if transparent:
                marginColor = (0,0,0,0)
            else:
                marginColor = (resizedBackPixelData[0,0][0], resizedBackPixelData[0,0][1], resizedBackPixelData[0,0][2], 255)
            resizedBack = ImageOps.expand(resizedBackA,border=marginSize,fill=marginColor)

            if transparent:
                marginColor = (0,0,0,0)
            else:
                marginColor = (resizedBackShinyPixelData[0,0][0], resizedBackShinyPixelData[0,0][1], resizedBackShinyPixelData[0,0][2], 255)
            resizedShinyBack = ImageOps.expand(resizedBackShinyA,border=marginSize,fill=marginColor)

            resizedFront.save(pokemonImage + "_front.png", "PNG")
            resizedFrontShiny.save(pokemonImage + "_front_shiny.png")
            resizedBack.save(pokemonImage + "_back.png")
            resizedShinyBack.save(pokemonImage + "_back_shiny.png")
            
        # Moves the images to the appropriate folder
        shutil.copy(pokemonImage + "_front.png", "output/000_EveryMon/Front")
        shutil.copy(pokemonImage + "_front_shiny.png", "output/000_EveryMon/Front-Shiny")
        shutil.copy(pokemonImage + "_back.png", "output/000_EveryMon/Back")
        shutil.copy(pokemonImage + "_back_shiny.png", "output/000_EveryMon/Back-Shiny")
        
        shutil.move(pokemonImage + "_front.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_front_shiny.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_back.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_back_shiny.png", "output/"+pokemonImage)

    if spriteType == "Overworld_Trainers":
    
        segments = 10
        segmentWidth = width/segments

        frontStandingLeft = 0
        frontStandingRight = segmentWidth

        backStandingLeft = frontStandingRight
        backStandingRight = backStandingLeft+segmentWidth

        sideStandingLeft = backStandingRight
        sideStandingRight = sideStandingLeft+segmentWidth

        frontWalking1Left = sideStandingRight
        frontWalking1Right = frontWalking1Left+segmentWidth

        frontWalking2Left = frontWalking1Right
        frontWalking2Right = frontWalking2Left+segmentWidth

        backWalking1Left = frontWalking2Right
        backWalking1Right = backWalking1Left+segmentWidth

        backWalking2Left = backWalking1Right
        backWalking2Right = backWalking2Left+segmentWidth

        sideWalking1Left = backWalking2Right
        sideWalking1Right = sideWalking1Left+segmentWidth

        sideWalking2Left = sideWalking1Right
        sideWalking2Right = sideWalking2Left+segmentWidth
        
        optionalSlotLeft = sideWalking2Right
        optionalSlotRight = optionalSlotLeft+segmentWidth

        # Crops the individual images
        croppedFrontStanding = originalSprite.crop((frontStandingLeft, 0, frontStandingRight, height))
        croppedBackStanding = originalSprite.crop((backStandingLeft, 0, backStandingRight, height))
        croppedSideStanding = originalSprite.crop((sideStandingLeft, 0, sideStandingRight, height))
        croppedFrontWalking1 = originalSprite.crop((frontWalking1Left, 0, frontWalking1Right, height))
        croppedFrontWalking2 = originalSprite.crop((frontWalking2Left, 0, frontWalking2Right, height))
        croppedBackWalking1 = originalSprite.crop((backWalking1Left, 0, backWalking1Right, height))
        croppedBackWalking2 = originalSprite.crop((backWalking2Left, 0, backWalking2Right, height))
        croppedSideWalking1 = originalSprite.crop((sideWalking1Left, 0, sideWalking1Right, height))
        croppedSideWalking2 = originalSprite.crop((sideWalking2Left, 0, sideWalking2Right, height))
        croppedOptionalSlot = originalSprite.crop((optionalSlotLeft, 0, optionalSlotRight, height))

        # Saves the images to a file
        croppedFrontStanding.save(pokemonImage + "_1_frontStanding.png")
        croppedFrontStandingA = Image.open(pokemonImage + "_1_frontStanding.png")
        croppedFrontStandingA.convert("RGBA")
        croppedFrontStandingAPixelData = croppedFrontStandingA.load()
        croppedFrontStandingAData = croppedFrontStandingA.getdata()
        
        if transparent:
            croppedFrontStandingANewData = []
            for item in croppedFrontStandingAData:
                if item[0] == croppedFrontStandingAPixelData[0,0][0] and item[1] == croppedFrontStandingAPixelData[0,0][1] and item[2] == croppedFrontStandingAPixelData[0,0][2]:
                    croppedFrontStandingANewData.append((255,255,255,0))
                else:
                    croppedFrontStandingANewData.append(item)
            croppedFrontStandingA.putdata(croppedFrontStandingANewData)
            croppedFrontStandingA.save(pokemonImage + "_1_frontStanding.png", "PNG")

        #


        
        croppedBackStanding.save(pokemonImage + "_2_backStanding.png")
        croppedSideStanding.save(pokemonImage + "_3_sideStanding.png")
        croppedFrontWalking1.save(pokemonImage + "_4_frontWalking1.png")
        croppedFrontWalking2.save(pokemonImage + "_5_frontWalking2.png")
        croppedBackWalking1.save(pokemonImage + "_6_backWalking1.png")
        croppedBackWalking2.save(pokemonImage + "_7_backWalking2.png")
        croppedSideWalking1.save(pokemonImage + "_8_sideWalking1.png")
        croppedSideWalking2.save(pokemonImage + "_9_sideWalking2.png")
        croppedOptionalSlot.save(pokemonImage + "_10_OptionalSlot.png")

        # Moves the images to the appropriate folder
        shutil.move(pokemonImage + "_1_frontStanding.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_2_backStanding.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_3_sideStanding.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_4_frontWalking1.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_5_frontWalking2.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_6_backWalking1.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_7_backWalking2.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_8_sideWalking1.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_9_sideWalking2.png", "output/"+pokemonImage)
        shutil.move(pokemonImage + "_10_OptionalSlot.png", "output/"+pokemonImage)

if __name__ == "__main__":
    
  ###
 #   #
#  #  # Overworld_Trainers
### ### Battle_Mons
#  #  # Grilled_Cheeses
 #   #
  ### 

    ## SUPER SPECIAL SETTINGS ##
    spriteType = "Battle_Mons"
    resizing = True
    transparent = True
    ############################

    listP = os.listdir()
    listP.sort()
    
    print("Clearing the /Outputs folder if it exists. Please wait...\n")
    shutil.rmtree(os.getcwd() + "/output/", ignore_errors=True)
    sleep(2)

    if spriteType == "Battle_Mons":
        tempCreatedFolder = Path(os.getcwd() + "/output/000_EveryMon").mkdir(parents= True, exist_ok= True)
        tempCreatedFolder = Path(os.getcwd() + "/output/000_EveryMon/Front").mkdir(parents= True, exist_ok= True)
        tempCreatedFolder = Path(os.getcwd() + "/output/000_EveryMon/Front-Shiny").mkdir(parents= True, exist_ok= True)
        tempCreatedFolder = Path(os.getcwd() + "/output/000_EveryMon/Back").mkdir(parents= True, exist_ok= True)
        tempCreatedFolder = Path(os.getcwd() + "/output/000_EveryMon/Back-Shiny").mkdir(parents= True, exist_ok= True)

    # Loops through the entire folder
    for filename in (filename for filename in glob.iglob('*') if '.png' in filename):
        fileName, f_ext = os.path.splitext(filename)
        print("Now cropping: " + filename)
        sleep(0.1)
        imageCropper(fileName, spriteType, resizing, transparent)

    print("I've finished cropping all the .png files")
