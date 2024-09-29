import json
import textwrap

stats = open('PokeScape Main Sheet - Stats.tsv', encoding='utf8')
icons = open('PokeScape Main Sheet - ICONS.tsv', encoding='utf8')
evos = open('PokeScape Main Sheet - Evolutions.tsv', encoding='utf8')
lvlupmoves = open('PokeScape Main Sheet - LevelUp Moves.tsv', encoding='utf8')
eggmoves = open('PokeScape Main Sheet - Egg Moves.tsv', encoding='utf8')
dexentries = open('PokeScape Main Sheet - Dex Entries.tsv', encoding='utf8')

stats_lines = stats.readlines()
dexentries_lines = dexentries.readlines()
icons_lines = icons.readlines()
evos_lines = evos.readlines()

counter = 0


outFile = open("Outputfile.txt", "w")    
buffer = []



    

for i in range(len(stats_lines)):
    evo = False
    ID = 0
    NAME = 1
    Type1 = 2
    Type2 = 3
    Ability1 = 4
    Ability2 = 5
    StatsTotal = 7
    HP = 8
    Attack = 9
    Defense = 10
    SpecialAttack = 11
    SpecialDefense = 12
    Speed = 13
    HeldItem1 = 15
    HeldItem2 = 16
    ExpYield = 17
    ExpGrowth = 18
    Genderratio = 19
    CatchPercent = 20
    Friendship = 21
    EggCycles = 22
    EggGroup1 = 23
    EggGroup2 = 24
    FleeRate = 25
    HPEV = 27
    AttackEV = 28
    DefenseEV = 29
    SpecialAttackEV = 30
    SpecialDefenseEV = 31
    SpeedEV = 32
    PokedexNumber = 34
    Footprint = 35
    EggSteps = 36
    FAMILYLINE = 37
    INGAMENAME = 38
    HiddenAbility = 39
    stats_line_json_dumps = json.dumps(stats_lines[i].split('\t'))
    stats_line_json = json.loads(stats_line_json_dumps)
    Type2_ = stats_line_json[Type2]
    if Type2_ == '-':
        Type2_ = stats_line_json[Type1]
    EggGroup2_ = stats_line_json[EggGroup2].upper()
    if EggGroup2_ == '':
        EggGroup2_ = stats_line_json[EggGroup1].upper()
    Ability2_ = stats_line_json[Ability2].upper()
    if Ability2_ == '-':
        Ability2_ = 'NONE'
    HiddenAbility_ = stats_line_json[HiddenAbility].replace('\n', '').upper()
    if HiddenAbility_ == '-':
        HiddenAbility_ = 'NONE'
    buffer.append('\n')    
    buffer.append('\n[SPECIES_' + stats_line_json[NAME].upper() + '] =')
    buffer.append('\n\t{')
    buffer.append('\n\t\t.baseHP = ' + stats_line_json[HP] + ',')
    buffer.append('\n\t\t.baseAttack = ' + stats_line_json[Attack] + ',')
    buffer.append('\n\t\t.baseDefense = ' + stats_line_json[Defense] + ',')
    buffer.append('\n\t\t.baseSpeed = ' + stats_line_json[Speed] + ',')
    buffer.append('\n\t\t.baseSpAttack = ' + stats_line_json[SpecialAttack] + ',')
    buffer.append('\n\t\t.baseSpDefense = ' + stats_line_json[SpecialDefense] + ',')
    buffer.append('\n\t\t.types = { TYPE_' + stats_line_json[Type1] + ', TYPE_' + Type2_ + ' },')
    buffer.append('\n\t\t.catchRate = ' + stats_line_json[CatchPercent] + ',')
    buffer.append('\n\t\t.expYield = ' + stats_line_json[ExpYield] + ',')
    if stats_line_json[HPEV]:
        buffer.append('\n\t\t.evYield_HP = ' + stats_line_json[HPEV] + ',')
    if stats_line_json[AttackEV]:
        buffer.append('\n\t\t.evYield_Attack = ' + stats_line_json[AttackEV] + ',')
    if stats_line_json[DefenseEV]:
        buffer.append('\n\t\t.evYield_Defense = ' + stats_line_json[DefenseEV] + ',')
    if stats_line_json[SpeedEV]:
        buffer.append('\n\t\t.evYield_Speed = ' + stats_line_json[SpeedEV] + ',')
    if stats_line_json[SpecialAttackEV]:
        buffer.append('\n\t\t.evYield_SpAttack = ' + stats_line_json[SpecialAttackEV] + ',')
    if stats_line_json[SpecialDefenseEV]:
        buffer.append('\n\t\t.evYield_SpDefense = ' + stats_line_json[SpecialDefenseEV] + ',')
    buffer.append('\n\t\t.genderRatio = PERCENT_FEMALE(' + stats_line_json[Genderratio] + '),')
    buffer.append('\n\t\t.eggCycles = ' + stats_line_json[EggCycles] + ',')
    buffer.append('\n\t\t.friendship = ' + stats_line_json[Friendship] + ',')
    buffer.append('\n\t\t.growthRate = GROWTH_' + stats_line_json[ExpGrowth].replace(' ', '_').upper() + ',')

    buffer.append('\n\t\t.itemCommon = ITEM_NONE,') #+ stats_line_json[HeldItem1].replace(' ', '_').upper() + ',') # Cupholder
    buffer.append('\n\t\t.itemRare = ITEM_NONE,') #+ stats_line_json[HeldItem1].replace(' ', '_').upper() + ',') # Cupholder
    
    buffer.append('\n\t\t.eggGroups = { EGG_GROUP_' + stats_line_json[EggGroup1].upper() + ', EGG_GROUP_' + EggGroup2_ + ' },')
    buffer.append('\n\t\t.abilities = { ABILITY_' + stats_line_json[Ability1].upper() + ', ABILITY_' + Ability2_ + ', ABILITY_' + HiddenAbility_ + ' },')
    buffer.append('\n\t\t.bodyColor = BODY_COLOR_GREEN,') # Cupholder
    buffer.append('\n\t\t.speciesName = _("' + stats_line_json[INGAMENAME] + '"),')
    buffer.append('\n\t\t.cryId = CRY_' + stats_line_json[NAME].upper() + ',')
    buffer.append('\n\t\t.natDexNum = NATIONAL_DEX_' + stats_line_json[NAME].upper() + ',')
    try:
        ID = 0
        NAME = 1
        DEXENTRY = 2
        HEIGHT = 3
        WEIGHT = 4
        DEXNUMBER = 5
        CATEGORY = 6
        COUNT = 7
        CreatureinRuneScape = 8
        dexentries_line_json_dumps = json.dumps(dexentries_lines[i].split('\t'))
        dexentries_line_json = json.loads(dexentries_line_json_dumps)
        height = dexentries_line_json[HEIGHT]
        if height == '':
            height = 0
        weight = dexentries_line_json[WEIGHT]
        if weight == '':
            weight = 0
        buffer.append('\n\t\t.categoryName = _("' + dexentries_line_json[CATEGORY] + '"),')
        buffer.append('\n\t\t.height = ' + str(height) + ',')
        buffer.append('\n\t\t.weight = ' + str(weight) + ',')
        buffer.append('\n\t\t.description = COMPOUND_STRING(')
        for line in textwrap.wrap(text=dexentries_line_json[DEXENTRY], width=45, initial_indent='\n\t\t\t"', subsequent_indent='\n\t\t\t"'):
            buffer.append(line + '\\n"')
        buffer[-1] = buffer[-1].replace('\\n', '')
        buffer.append('),')
        buffer.append('\n\t\t.pokemonScale = 256,') # Cupholder
        buffer.append('\n\t\t.pokemonOffset = 0,') # Cupholder
        buffer.append('\n\t\t.trainerScale = 256,') # Cupholder
        buffer.append('\n\t\t.trainerOffset = 0,') # Cupholder
        buffer.append('\n\t\tFRONT_PIC(' + dexentries_line_json[NAME].replace('\n', '') + ', 64, 64),') # Cupholder
        buffer.append('\n\t\t.frontPicYOffset = 0,') # Cupholder
        buffer.append('\n\t\t.frontAnimFrames = sAnims_' + dexentries_line_json[NAME].replace('\n', '') + ',') # Cupholder
        buffer.append('\n\t\t.enemyMonElevation = 0,') # Cupholder
        buffer.append('\n\t\t.frontAnimId = ANIM_V_JUMPS_H_JUMPS,') # Cupholder
        buffer.append('\n\t\tBACK_PIC(' + dexentries_line_json[NAME].replace('\n', '') + ', 64, 64),') # Cupholder
        buffer.append('\n\t\t.backPicYOffset = 0,') # Cupholder
        buffer.append('\n\t\t.backAnimId = BACK_ANIM_DIP_RIGHT_SIDE,') # Cupholder
        buffer.append('\n\t\tPALETTES(' + dexentries_line_json[NAME].replace('\n', '') + '),') # Cupholder
    except:
        buffer.append('\n\t\t.categoryName = _("Cupholder"),') # Cupholder
        buffer.append('\n\t\t.height = 0') # Cupholder
        buffer.append('\n\t\t.weight = 0') # Cupholder
        buffer.append('\n\t\t.description = COMPOUND_STRING("Cupholder"),') # Cupholder
        buffer.append('\n\t\t.pokemonScale = 256,') # Cupholder
        buffer.append('\n\t\t.pokemonOffset = 0,') # Cupholder
        buffer.append('\n\t\t.trainerScale = 256,') # Cupholder
        buffer.append('\n\t\t.trainerOffset = 0,') # Cupholder
        buffer.append('\n\t\tFRONT_PIC(' + stats_line_json[NAME] + ', 64, 64),') # Cupholder
        buffer.append('\n\t\t.frontPicYOffset = 0,') # Cupholder
        buffer.append('\n\t\t.frontAnimFrames = sAnims_' + dexentries_line_json[NAME] + ',') # Cupholder
        buffer.append('\n\t\t.frontAnimId = ANIM_V_JUMPS_H_JUMPS,') # Cupholder
        buffer.append('\n\t\tBACK_PIC(' + stats_line_json[NAME] + ', 64, 64),') # Cupholder
        buffer.append('\n\t\t.backPicYOffset = 0,') # Cupholder
        buffer.append('\n\t\t.backAnimId = BACK_ANIM_DIP_RIGHT_SIDE,') # Cupholder
        buffer.append('\n\t\tPALETTES(' + stats_line_json[NAME] + '),') # Cupholder
    try:
        ID = 0
        NAME = 1
        ICONPAL = 2
        icons_line_json_dumps = json.dumps(icons_lines[i].split('\t'))
        icons_line_json = json.loads(icons_line_json_dumps)
        iconpal = icons_line_json[ICONPAL].replace('\n', '')
        if not iconpal:
            iconpal = 0
        buffer.append('\n\t\tICON(' + icons_line_json[NAME] + ', ' + str(iconpal) + '),')
    except:
        buffer.append('\n\t\tICONS(' + stats_line_json[NAME] + ', 0),') # Cupholder
    buffer.append('\n\t\t.footprint = gMonFootprint_' + stats_line_json[NAME] + ',')
    buffer.append('\n\t\tLEARNSETS(' + stats_line_json[NAME] + '),')
    for j in range(len(evos_lines)):
        MONSTER = 0
        METHOD = 1
        SECONDARY = 2
        REQUIREMENT = 3
        EVOLVESINTO = 4
        evos_line_json_dumps = json.dumps(evos_lines[j].split('\t'))
        evos_line_json = json.loads(evos_line_json_dumps)
        if evos_line_json[MONSTER] == stats_line_json[NAME]:
            evo = True
            method = evos_line_json[METHOD]
            secondary = evos_line_json[SECONDARY]
            requirement = 'SPECIES_' + evos_line_json[REQUIREMENT].replace(' ', '_').upper()
            if method == 'EVO_ITEM':
                secondary = 'ITEM_' + secondary.replace(' ', '_').upper()
            if method == 'EVO_MOVE':
                secondary = 'MOVE_' + secondary.replace(' ', '_').upper()
            if method == 'EVO_SPECIFIC_MON_IN_PARTY':
                secondary = 'SPECIES_' + secondary.replace(' ', '_').upper()
            if counter == 0:
                buffer.append('\n\t\t.evolutions = EVOLUTION(')
                counter = counter + 1
            buffer.append('\n\t\t\t{' + method + ', ' + secondary + ', ' + requirement + '},')
    if evo:
        buffer[-1] = buffer[-1].replace('},', '}')
        buffer.append('\n\t\t),')
    counter = 0
    buffer.append('\n\t},')
    
for line in lvlupmoves:
    ID = 0
    NAME = 1
    LEVEL = 2
    MOVE = 3
    lvlupmoves_line_json_dumps = json.dumps(line.split('\t'))
    lvlupmoves_line_json = json.loads(lvlupmoves_line_json_dumps)

for line in eggmoves:
    ID = 0
    MONSTER = 1
    MOVENAME = 2
    eggmoves_line_json_dumps = json.dumps(line.split('\t'))
    eggmoves_line_json = json.loads(eggmoves_line_json_dumps)





outFile.writelines(buffer)

print('FINISHED.')    
