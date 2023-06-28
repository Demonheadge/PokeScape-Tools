var util = require('util')
var fs = require('fs');
const stats = require('./js folder/' + './PokeScape_Stats.js')
const ev_yields = require('./js folder/' + './PokeScape_EVYeild.js')
const evolution = require('./js folder/' + './PokeScape_Evolution.js')
const level_up_moves = require('./js folder/' + './PokeScape_LevelUp_Moves.js')
const tm_hm = require('./js folder/' + './PokeScape_TM_HM.js')
const DexEntries = require('./js folder/' + './PokeScape_DexEntries.js')
const learnsets = Object.keys(level_up_moves);
const base_stats = Object.keys(stats);
const ev_yield_keys = Object.keys(ev_yields);
const evolutions = Object.keys(evolution);
const speciesH = Object.keys(stats);
const pokedexH = Object.keys(stats);
const pokedexData = Object.keys(DexEntries);
const PokedexDataTable = Object.keys(DexEntries);
const SpeciesToPokdexTable = Object.keys(DexEntries);
const Enemy_Elevation_Table = Object.keys(DexEntries);
const CryTable = Object.keys(DexEntries);
const CryTable2 = Object.keys(DexEntries);


/* for (i = 0; i < Object.keys(level_up_moves).length; i++) {
	console.log(Object.keys(level_up_moves[Object.keys(level_up_moves)[i]]) + '\n' + util.inspect(level_up_moves[Object.keys(level_up_moves)[i]][Object.keys(level_up_moves[Object.keys(level_up_moves)[i]])]))
} */



/* --------------------------------------------------------------------------------------------------*/
/* 	Learnsets.c */
/* --------------------------------------------------------------------------------------------------*/
let learnsets_print = '';
learnsets_print += '#include "defines.h"\n#include "../include/moves.h"\n\n#ifdef EXPAND_LEARNSETS\n\n#define LEVEL_UP_MOVE(lvl, move) {move, lvl}\n#define LEVEL_UP_END {0x0, 0xFF}\n\nstruct __attribute__((packed)) LevelUpMove\n{\n\tu16 move;\n\tu8 level;\n};\n\nstatic const struct LevelUpMove sEmptyMoveset[] = {\n\tLEVEL_UP_END\n};\n\n'
for (k = 0; k < learnsets.length; k++) {
	learnsets_print += 'static const struct LevelUpMove s' + learnsets[k] + 'LevelUpLearnset[] = {\n'
	pokemon_tags = Object.keys(level_up_moves)[k]
    if (learnsets[k] = pokemon_tags) learnsets[k] = learnsets[k].split(0, learnsets[k].length)
    if (learnsets[k].lvlup === undefined) learnsets[k].lvlup = [];
    learnsets[k].lvlup.push(level_up_moves[learnsets[k]])
    for (i = 0; i < 101; i++) {
		if (learnsets[k].lvlup[0][Object.keys(learnsets[k].lvlup[0])][i] !== undefined) learnsets_print += '\tLEVEL_UP_MOVE(' + i + ', MOVE_' + learnsets[k].lvlup[0][Object.keys(learnsets[k].lvlup[0])][i].toUpperCase() + '),\n'	
    }
learnsets_print += '\tLEVEL_UP_END\n};\n\n'
}
	learnsets_print += 'const struct LevelUpMove* const gLevelUpLearnsets[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = sEmptyMoveset,\n' 
for (k = 0; k < learnsets.length; k++) {
	learnsets_print += '\t[SPECIES_' + (learnsets[k] + '] = ').toUpperCase() + 's' + learnsets[k] + 'LevelUpLearnset,\n'
	}
	learnsets_print += '};\n#endif'

fs.writeFile('./output/' + './src/' + 'Learnsets.c', learnsets_print, function (err) {
  if (err) throw err;
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
/* --------------------------------------------------------------------------------------------------*/
/* 	tm_compatibility */
/* --------------------------------------------------------------------------------------------------*/
let tm_hm_learnsets = [];
let tm_hm_learnset_output = '';
for (k = 0; k < base_stats.length; k++) {
    for (i = 0; i < Object.keys(tm_hm).length; i++) {
        if (i < 9) tm_hm_learnset_output += 'TM0' + (i + 1) + ': '
        if (i > 9) tm_hm_learnset_output += 'TM' + (i + 1) + ': '
        for (j = 0; j < tm_hm[Object.keys(tm_hm)[i]].length; j++) {
            if (tm_hm[Object.keys(tm_hm)[i]][j] === '') continue;
            if (j === 0) tm_hm_learnset_output += tm_hm[Object.keys(tm_hm)[i]][j] + '\n'
            if (j > 0) tm_hm_learnset_output += tm_hm[Object.keys(tm_hm)[i]][j].toUpperCase() + '\n'
        }
		
    console.log(tm_hm_learnset_output)
    fs.writeFile('./output/' + './src/' + './tm_compatibility/' + (i + 1) + ' - ' + tm_hm[Object.keys(tm_hm)[i]][0] + '.txt', tm_hm_learnset_output, function (err) {
      if (err) throw err;
    });
        tm_hm_learnset_output = '';
        }
    break;
}
/* --------------------------------------------------------------------------------------------------*/
/* 	Base_Stats.c */
/* --------------------------------------------------------------------------------------------------*/
let base_stats_print = '';
base_stats_print += '#include "defines.h"\n#include "../include/abilities.h"\n#include "../include/items.h"\n#include "../include/base_stats.h"\n\n// Maximum value for a female Pokémon is 254 (MON_FEMALE) which is 100% female.\n// 255 (MON_GENDERLESS) is reserved for genderless Pokémon.\n#define PERCENT_FEMALE(percent) min(254, ((percent * 255) / 100))\n\nconst struct BaseStats gBaseStats[] = \n{\n	[SPECIES_NONE] = {0},\n\n'
for (k = 0; k < base_stats.length; k++) {
/* 	if (stats[base_stats[k]][2] === '') stats[base_stats[k]][2] = stats[base_stats[k]][0] */
	if (stats[base_stats[k]][5] === '') stats[base_stats[k]][5] = stats[base_stats[k]][4]
	base_stats_print += '\t[SPECIES_' + stats[base_stats[k]][2].toUpperCase().replace(/ /g, '_')/* .replace(/_/g, '') *//* .replace(/-/g, '') */.replace('.', '') + '] =\n\t{\n\t\t.baseHP = ' + stats[base_stats[k]][10] + ',\n\t\t.baseAttack = ' + stats[base_stats[k]][11] + ',\n\t\t.baseDefense = ' + stats[base_stats[k]][12] + ',\n\t\t.baseSpAttack = ' + stats[base_stats[k]][13] + ',\n\t\t.baseSpDefense = ' + stats[base_stats[k]][14] + ',\n\t\t.baseSpeed = ' + stats[base_stats[k]][15] + ',\n\t\t.type1 = TYPE_' + stats[base_stats[k]][4].toUpperCase() + ',\n\t\t.type2 = TYPE_' + stats[base_stats[k]][5].toUpperCase() + ',\n\t\t.catchRate = ' + stats[base_stats[k]][21] + ',\n\t\t.expYield = ' + stats[base_stats[k]][18]

    if (ev_yields[ev_yield_keys[k]][1] === "") ev_yields[ev_yield_keys[k]][1] = '0';
	base_stats_print += ',\n\t\t.evYield_HP = ' + ev_yields[ev_yield_keys[k]][1]
	if (ev_yields[ev_yield_keys[k]][2] === "") ev_yields[ev_yield_keys[k]][2] = '0';
    base_stats_print += ',\n\t\t.evYield_Attack = ' + ev_yields[ev_yield_keys[k]][2]
	if (ev_yields[ev_yield_keys[k]][3] === "") ev_yields[ev_yield_keys[k]][3] = '0';
    base_stats_print += ',\n\t\t.evYield_Defense = ' + ev_yields[ev_yield_keys[k]][3]
	if (ev_yields[ev_yield_keys[k]][4] === "") ev_yields[ev_yield_keys[k]][4] = '0';
    base_stats_print += ',\n\t\t.evYield_SpAttack = ' + ev_yields[ev_yield_keys[k]][4]
	if (ev_yields[ev_yield_keys[k]][5] === "") ev_yields[ev_yield_keys[k]][5] = '0';
    base_stats_print += ',\n\t\t.evYield_SpDefense = ' + ev_yields[ev_yield_keys[k]][5]
	if (ev_yields[ev_yield_keys[k]][6] === "") ev_yields[ev_yield_keys[k]][6] = '0';
    base_stats_print += ',\n\t\t.evYield_Speed = ' + ev_yields[ev_yield_keys[k]][6]

	if (stats[base_stats[k]][16] === '') stats[base_stats[k]][16] = 'ITEM_NONE';
	if (stats[base_stats[k]][17] === '') stats[base_stats[k]][17] = 'ITEM_NONE';
	if (stats[base_stats[k]][6] === '') stats[base_stats[k]][6] = 'NONE';
	if (stats[base_stats[k]][7] === '') stats[base_stats[k]][7] = 'NONE';
	if (stats[base_stats[k]][8] === '') stats[base_stats[k]][8] = 'NONE';
	if (stats[base_stats[k]][25] === '') stats[base_stats[k]][25] = stats[base_stats[k]][24];
	if (stats[base_stats[k]][20] === 'Genderless') stats[base_stats[k]][20] = 'MON_GENDERLESS'
	if (stats[base_stats[k]][20] === '0') stats[base_stats[k]][20] = "PERCENT_FEMALE(0)"
	if (stats[base_stats[k]][20] === '12.5') stats[base_stats[k]][20] = "PERCENT_FEMALE(12.5)"
	if (stats[base_stats[k]][20] === '40') stats[base_stats[k]][20] = "PERCENT_FEMALE(40)"
	if (stats[base_stats[k]][20] === '50') stats[base_stats[k]][20] = "PERCENT_FEMALE(50)"
	if (stats[base_stats[k]][20] === '75') stats[base_stats[k]][20] = "PERCENT_FEMALE(75)"
	if (stats[base_stats[k]][20] === '100') stats[base_stats[k]][20] = "PERCENT_FEMALE(100)"
	
	base_stats_print += ',\n\t\t.item1 = ' + stats[base_stats[k]][16].toUpperCase() + ',\n\t\t.item2 = ' + stats[base_stats[k]][17].toUpperCase() + ',\n\t\t.genderRatio = ' + stats[base_stats[k]][20] + ',\n\t\t.eggCycles = ' + stats[base_stats[k]][23] + ',\n\t\t.friendship = ' + stats[base_stats[k]][22] + ',\n\t\t.growthRate = GROWTH_' + stats[base_stats[k]][19].toUpperCase().replace(/ /g, '_') + ',\n\t\t.eggGroup1 = EGG_GROUP_' + stats[base_stats[k]][24].toUpperCase().replace(/ /g, '') + ',\n\t\t.eggGroup2 = EGG_GROUP_' + stats[base_stats[k]][25].toUpperCase().replace(/ /g, '') + ',\n\t\t.ability1 = ABILITY_' + stats[base_stats[k]][6].toUpperCase().replace(/ /g, '') + ',\n\t\t.ability2 = ABILITY_' + stats[base_stats[k]][7].toUpperCase().replace(/ /g, '') + ',\n\t\t.safariZoneFleeRate = ' + stats[base_stats[k]][26] + ',\n\t\t.hiddenAbility = ABILITY_' + stats[base_stats[k]][8].toUpperCase().replace(/ /g, '') + ',\n\t\t.noFlip = TRUE,'

	 base_stats_print += '\n\t},\n\n'
}
	base_stats_print += '};'
    console.log(base_stats_print)
	fs.writeFile('./output/' + './src/' + 'Base_Stats.c', base_stats_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* 	Evolution_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let evolution_print = '';
evolution_print += '#include "defines.h"\n#include "../include/moves.h"\n#include "../include/items.h"\n#include "../include/evolution.h"\n#include "../include/base_stats.h"\n\n#define TIME_RANGE(startTime, endTime) ((startTime << 8) | endTime)\n\nconst struct Evolution gEvolutionTable[NUM_SPECIES][EVOS_PER_MON] =\n{\n'
for (k = 0; k < evolutions.length; k++) {
    if (evolution[k][0] != '' && evolution[k][2] != '')
        evolution_print += '\t[SPECIES_' + evolution[k][0].toUpperCase() + '] =\t\t' + '{{' + evolution[k][1] + ', ' + evolution[k][2] + ', SPECIES_' + evolution[k][3].toUpperCase() + ', 0}},\n'
    if (evolution[k][0] == '')
        evolution_print += '\t\t\t\t\t\t\t\t{{' + evolution[k][1] + ', ' + evolution[k][2] + ', [SPECIES_' + evolution[k][3].toUpperCase() + '], 0}},\n'
}
	evolution_print += '};'
    console.log(evolution_print)
	fs.writeFile('./output/' + './src/' + 'Evolution Table.c', evolution_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* 	SPECIES.H */
/* --------------------------------------------------------------------------------------------------*/
let speciesH_print = ''
speciesH_print += '#pragma once\n\n#define SPECIES_NONE 0x0\n'
for (k = 0; k < speciesH.length; k++) {
	speciesH_print += '#define SPECIES_' + stats[speciesH[k]][2].toUpperCase() + ' 0x' + (k+1).toString(16).toUpperCase() + '\n'
}
    console.log(speciesH_print)
	fs.writeFile('./output/' + './include/' +'Species.h', speciesH_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* 	Pokedex.h */
/* --------------------------------------------------------------------------------------------------*/
let pokedexH_print = ''
pokedexH_print += '#pragma once\n\nstruct PokedexEntry\n{\n\t/*0x00*/ u8 categoryName[12];\n\t/*0x0C*/ u16 height; //in decimeters\n    /*0x0E*/ u16 weight; //in hectograms\n\t/*0x10*/ const u8* description;\n\t/*0x14*/ u16 unused;\n\t/*0x16*/ u16 pokemonScale;\n\t/*0x18*/ u16 pokemonOffset;\n\t/*0x1A*/ u16 trainerScale;\n\t/*0x1C*/ u16 trainerOffset;\n\t/*0x1E*/ u16 unknown1;\n\t/*0x20*/ u32 unknown2;\n};\t/*size = 0x24*/\n\nstruct AlternateDexEntries\n{\n\tu16 species;\n\tconst u8* description;\n};\n\nenum\n{\n\tFLAG_GET_SEEN,\n\tFLAG_GET_CAUGHT,\n\tFLAG_SET_SEEN,\n\tFLAG_SET_CAUGHT\n};\n\n'
pokedexH_print += '//PokeScape\n#define NATIONAL_DEX_NONE 0\n'
for (k = 0; k < pokedexH.length; k++) {
	pokedexH_print += '#define NATIONAL_DEX_' + stats[pokedexH[k]][2].toUpperCase() + ' ' + (k+1) + '\n'
	
}
	pokedexH_print += '\n#define FINAL_DEX_ENTRY NATIONAL_DEX_' + stats[pokedexH[k-1]][2].toUpperCase() + ' //Not +1 b/c used like this for some asm\n' + '#define NATIONAL_DEX_COUNT NATIONAL_DEX_' + stats[pokedexH[k-1]][2].toUpperCase() + ' + 1\n'
	pokedexH_print += '\n'
for (k = 0; k < pokedexH.length; k++) {
	pokedexH_print += 'extern const u8 DEX_ENTRY_' + stats[pokedexH[k]][2].toUpperCase() + '[];\n'
}
	console.log(pokedexH_print)
	fs.writeFile('./output/' + './include/' +'Pokedex.h', pokedexH_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Pokedex_Data.string */
/* --------------------------------------------------------------------------------------------------*/
let pokedexData_print = ''

for (k = 0; k < pokedexData.length; k++) {
	pokedexData_print += '#org @DEX_ENTRY_' + DexEntries[pokedexData[k]][1].toUpperCase() + '\n' + DexEntries[pokedexData[k]][2] + '\n\n'
	
}
	console.log(pokedexData_print)
	fs.writeFile('./output/' + './strings/' +'Pokedex_Data.string', pokedexData_print, function (err) {
  if (err) throw err;
});

/* --------------------------------------------------------------------------------------------------*/
/* Species_To_Pokdex_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let SpeciesToPokdexTable_print = ''
	SpeciesToPokdexTable_print += '#include "defines.h"\n#include "../include/pokedex.h"\n\nconst u16 gSpeciesToNationalPokedexNum[NUM_SPECIES - 1] =\n{\n'
for (k = 0; k < SpeciesToPokdexTable.length; k++) {
	SpeciesToPokdexTable_print += '\t[SPECIES_' + DexEntries[SpeciesToPokdexTable[k]][1].toUpperCase() +  ' - 1] = NATIONAL_DEX_' + DexEntries[SpeciesToPokdexTable[k]][1].toUpperCase() + ',\n'
}
	SpeciesToPokdexTable_print += '};'
	console.log(SpeciesToPokdexTable_print)
	fs.writeFile('./output/' + './src/' +'Species_To_Pokdex_Table.c', SpeciesToPokdexTable_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Enemy_Elevation_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let Enemy_Elevation_Table_print = ''
	Enemy_Elevation_Table_print += '#include "defines.h"\n\nconst u8 gEnemyMonElevation[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = 0x0,\n'
for (k = 0; k < Enemy_Elevation_Table.length; k++) {
	Enemy_Elevation_Table_print += '\t[SPECIES_' + DexEntries[Enemy_Elevation_Table[k]][1].toUpperCase() +  '] = 0x0,\n'	
}
	Enemy_Elevation_Table_print += '};'
	console.log(Enemy_Elevation_Table_print)
	fs.writeFile('./output/' + './src/' +'Enemy_Elevation_Table.c', Enemy_Elevation_Table_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Cry_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let CryTable_print = ''
	CryTable_print += '#include "defines.h"\n#include "../include/cries.h"\n#include "../include/cry_data.h"\n\nconst struct ToneData gCryTable[NUM_SPECIES] =\n{\n'


/* 	EVERYONE SOUNDS LIKE BULBASUAR */

	for (k = 0; k < CryTable.length; k++) {		
	CryTable_print += '\t[SPECIES_' + DexEntries[CryTable[k]][1].toUpperCase() +  '] =\n\t{\n'
	CryTable_print += '\t\t.type = 0x20,\n\t\t.key = 0x3c,\n\t\t.length = 0x0,\n\t\t.pan_sweep = 0x0,\n\t\t.wav = (u8*) 0x850fbc4' + ',\n\t\t.attack = 0xff,\n\t\t.decay = 0x0,\n\t\t.sustain = 0xff,\n\t\t.release = 0x0,\n\t},\n'
	}
	
	
	
/* 	IF AUDIO FILES ARE MADE FOR EACH MON */
	
/* 	for (k = 0; k < CryTable.length; k++) {		
	CryTable_print += '\t[SPECIES_' + DexEntries[CryTable[k]][1].toUpperCase() +  '] =\n\t{\n'
	CryTable_print += '\t\t.type = 0x20,\n\t\t.key = 0x3c,\n\t\t.length = 0x0,\n\t\t.pan_sweep = 0x0,\n\t\t.wav = gCry' + DexEntries[CryTable[k]][1] + ',\n\t\t.attack = 0xff,\n\t\t.decay = 0x0,\n\t\t.sustain = 0xff,\n\t\t.release = 0x0,\n\t},\n'
	} */
	CryTable_print += '};'
	
	console.log(CryTable_print)
	fs.writeFile('./output/' + './src/' +'Cry_Table.c', CryTable_print, function (err) {
  if (err) throw err;
});

/* --------------------------------------------------------------------------------------------------*/
/* Cry_Table_2.c */
/* --------------------------------------------------------------------------------------------------*/
let CryTable2_print = ''
	CryTable2_print += '#include "defines.h"\n#include "../include/cries.h"\n#include "../include/cry_data.h"\n\nconst struct ToneData gCryTable2[NUM_SPECIES] =\n{\n'


/* 	EVERYONE SOUNDS LIKE BULBASUAR */

	for (k = 0; k < CryTable2.length; k++) {		
	CryTable2_print += '\t[SPECIES_' + DexEntries[CryTable2[k]][1].toUpperCase() +  '] =\n\t{\n'
	CryTable2_print += '\t\t.type = 0x30,\n\t\t.key = 0x3c,\n\t\t.length = 0x0,\n\t\t.pan_sweep = 0x0,\n\t\t.wav = (u8*) 0x850fbc4' + ',\n\t\t.attack = 0xff,\n\t\t.decay = 0x0,\n\t\t.sustain = 0xff,\n\t\t.release = 0x0,\n\t},\n'
	}
	
	
	
/* 	IF AUDIO FILES ARE MADE FOR EACH MON */
	
/* 	for (k = 0; k < CryTable2.length; k++) {		
	CryTable2_print += '\t[SPECIES_' + DexEntries[CryTable2[k]][1].toUpperCase() +  '] =\n\t{\n'
	CryTable2_print += '\t\t.type = 0x30,\n\t\t.key = 0x3c,\n\t\t.length = 0x0,\n\t\t.pan_sweep = 0x0,\n\t\t.wav = gCry' + DexEntries[CryTable2[k]][1] + ',\n\t\t.attack = 0xff,\n\t\t.decay = 0x0,\n\t\t.sustain = 0xff,\n\t\t.release = 0x0,\n\t},\n'
	} */
	CryTable2_print += '};'
	
	console.log(CryTable2_print)
	fs.writeFile('./output/' + './src/' +'Cry_Table_2.c', CryTable2_print, function (err) {
  if (err) throw err;
});

/* --------------------------------------------------------------------------------------------------*/
/* Footprint_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let footprint_print = ''
footprint_print += '#include "defines.h"\n\n#ifdef INCLUDE_FOOTPRINTS\n\nconst u32 gMonFootprintTable[NUM_SPECIES] =\n{\n	[SPECIES_NONE] = 0x8d3058c,\n'
for (i = 0; i < base_stats.length; i++) {
    footprint_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = gMonFootprint_' + stats[base_stats[i]][2] + ',\n'
}
	footprint_print += '};\n\n#endif'
	console.log(footprint_print)
	fs.writeFile('./output/' + './src/' +'Footprint_Table.c', footprint_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Front_Pic_Coords_Table.c */
/* --------------------------------------------------------------------------------------------------*/
Front_Pic_Coords_Table_print = ''
Front_Pic_Coords_Table_print += '#include "defines.h"\n#include "../include/graphics.h"\n\nconst struct MonCoords gMonFrontPicCoords[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] =\n\t{\n\t\t.size = 0x88,\n\t\t.y_offset = 0x0,\n\t},\n'
for (i = 0; i < base_stats.length; i++) {
    Front_Pic_Coords_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] =\n' + '\t{\n' + '\t\t.size = 0x0,\n\t\t.y_offset = 0x0,\n\t},\n'
}
	Front_Pic_Coords_Table_print += '};'
	console.log(Front_Pic_Coords_Table_print)
	fs.writeFile('./output/' + './src/' +'Front_Pic_Coords_Table.c', Front_Pic_Coords_Table_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Back_Pic_Coords_Table.c */
/* --------------------------------------------------------------------------------------------------*/
Back_Pic_Coords_Table_print = ''
Back_Pic_Coords_Table_print += '#include "defines.h"\n#include "../include/graphics.h"\n\nconst struct MonCoords gMonBackPicCoords[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] =\n\t{\n\t\t.size = 0x88,\n\t\t.y_offset = 0x0,\n\t},\n'
for (i = 0; i < base_stats.length; i++) {
    Back_Pic_Coords_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] =\n' + '\t{\n' + '\t\t.size = 0x0,\n\t\t.y_offset = 0x0,\n\t},\n'
}
	Back_Pic_Coords_Table_print += '};'

	console.log(Back_Pic_Coords_Table_print)
	fs.writeFile('./output/' + './src/' +'Back_Pic_Coords_Table.c', Back_Pic_Coords_Table_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Front_Pic_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let Front_Pic_Table_print = ''
Front_Pic_Table_print += '#include "defines.h"\n#include "../include/graphics.h"\n#include "../include/sprite_data.h"\n\nconst struct CompressedSpriteSheet gMonFrontPicTable[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = {gFrontSprite000NoneTiles, (64 * 64) / 2, SPECIES_NONE},\n'
for (i = 0; i < base_stats.length; i++) {
    if (i <= 8) Front_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
    if (i > 8 && i < 99) Front_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
    if (i > 98) Front_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
}
	Front_Pic_Table_print += '};'
	console.log(Front_Pic_Table_print)
	fs.writeFile('./output/' + './src/' +'Front_Pic_Table.c', Front_Pic_Table_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Back_Pic_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let Back_Pic_Table_print = ''
Back_Pic_Table_print += '#include "defines.h"\n#include "../include/graphics.h"\n#include "../include/sprite_data.h"\n\nconst struct CompressedSpriteSheet gMonBackPicTable[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = {gBackShinySprite000NoneTiles, (64 * 64) / 2, SPECIES_NONE},\n'
for (i = 0; i < base_stats.length; i++) {
    if (i <= 8) Back_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
    if (i > 8 && i < 99) Back_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
    if (i > 98) Back_Pic_Table_print += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles, (64 * 64) / 2, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '},\n'
}
	Back_Pic_Table_print += '};'
	console.log(Back_Pic_Table_print)
	fs.writeFile('./output/' + './src/' +'Back_Pic_Table.c', Back_Pic_Table_print, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Palette_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let palette_table = ''
palette_table += '#include "defines.h"\n#include "../include/graphics.h"\n#include "../include/sprite_data.h"\n\nconst struct CompressedSpritePalette gMonPaletteTable[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = {gFrontSprite000NonePal, SPECIES_NONE, 0x0},\n'
for (i = 0; i < base_stats.length; i++) {
    if (i <= 8) palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ', 0x0},\n'
    if (i > 8 && i < 99) palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ', 0x0},\n'
    if (i > 98) palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gFrontSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ', 0x0},\n'
}
	palette_table += '};'
	console.log(palette_table)
	fs.writeFile('./output/' + './src/' +'Palette_Table.c', palette_table, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Shiny_Palette_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let Shiny_palette_table = ''
Shiny_palette_table += '#include "defines.h"\n#include "../include/graphics.h"\n#include "../include/sprite_data.h"\n\nconst struct CompressedSpritePalette gMonShinyPaletteTable[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = {gBackShinySprite000NonePal, SPECIES_NONE + NUM_SPECIES, 0x0},\n'
for (i = 0; i < base_stats.length; i++) {
    if (i <= 8) Shiny_palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ' + NUM_SPECIES, 0x0},\n'
    if (i > 8 && i < 99) Shiny_palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ' + NUM_SPECIES, 0x0},\n'
    if (i > 98) Shiny_palette_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = {gBackShinySprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal, SPECIES_' + stats[base_stats[i]][2].toUpperCase() + ' + NUM_SPECIES, 0x0},\n'
}
	Shiny_palette_table += '};'
	console.log(Shiny_palette_table)
	fs.writeFile('./output/' + './src/' +'Shiny_Palette_Table.c', Shiny_palette_table, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Pokedex_Orders.c */
/* --------------------------------------------------------------------------------------------------*/
let dex_order = ''
dex_order += '#include "defines.h"\n#include "../include/pokedex.h"\n\nconst u16 gPokedexOrder_Regional[] =\n{\n'
for (i = 0; i < base_stats.length; i++) {
    dex_order += '\tNATIONAL_DEX_' + stats[base_stats[i]][2].toUpperCase() + ',\n'
}
	dex_order += '\n};\n'
	dex_order += 'const u16 gRegionalDexCount = ARRAY_COUNT(gPokedexOrder_Regional);\n\nconst u16 gPokedexOrder_Alphabetical[] =\n{\n'
	dex_order += '\n};\n'
	dex_order += 'const u16 gPokedexOrder_Weight[] =\n{\n'
	dex_order += '\n};\n'
	dex_order += 'const u16 gPokedexOrder_Height[] =\n{\n'
	dex_order += '\n};\n'
	dex_order += 'const u16 gPokedexOrder_Type[] =\n{\n'
	dex_order += '\n};\n'
	console.log(dex_order)
	fs.writeFile('./output/' + './src/' +'Pokedex_Orders.c', dex_order, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Habitat_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let a = 1;
let Habitat_Table = ''

Habitat_Table += '#include "defines.h"\n\nstruct Habitat\n{\n\tconst struct HabitatPage* page;\n\tu32 numPages;\n};\n\nstruct HabitatPage\n{\n\tconst u16* mons;\n\tu32 numMons;\n};\n\n'



for (i = 0; i < base_stats.length; i += 4) {
    Habitat_Table += 'const u16 gGrasslandPage' + a + '[] =\n{\n'
    a++
    for (j = 0; j < 4; j++) {
        if ((stats[base_stats[i + j]]) == null) continue;
        Habitat_Table += '\tSPECIES_' + stats[base_stats[i + j]][2].toUpperCase() + ',\n'
    }
    Habitat_Table += '};\n\n'
}
	Habitat_Table += 'const struct HabitatPage gGrasslandPages[] =\n{\n'
	for (i = 1; i < base_stats.length/4 + 1; i++) {
	Habitat_Table += '\t{gGrasslandPage' + i + ', ARRAY_COUNT(gGrasslandPage' + i + ')},\n'
	}
    Habitat_Table += '};\n\n'
	
	Habitat_Table += 'const struct HabitatPage gForestPages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gWatersEdgePages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gSeaPages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gCavePages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gMountainPages[] =\n{\n'
    Habitat_Table += '};\n\n'
	
	Habitat_Table += 'const struct HabitatPage gRoughTerrainPages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gUrbanPages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct HabitatPage gRarePages[] =\n{\n'
    Habitat_Table += '};\n\n'

	Habitat_Table += 'const struct Habitat gHabitatPtrsTable[9] =\n{\n\t{gGrasslandPages, ARRAY_COUNT(gGrasslandPages)},\n\t{gForestPages, ARRAY_COUNT(gForestPages)},\n\t{gWatersEdgePages, ARRAY_COUNT(gWatersEdgePages)},\n\t{gSeaPages, ARRAY_COUNT(gSeaPages)},\n\t{gCavePages, ARRAY_COUNT(gCavePages)},\n\t{gMountainPages, ARRAY_COUNT(gMountainPages)},\n\t{gRoughTerrainPages, ARRAY_COUNT(gRoughTerrainPages)},\n\t{gUrbanPages, ARRAY_COUNT(gUrbanPages)},\n\t{gRarePages, ARRAY_COUNT(gRarePages)},\n};'
	console.log(Habitat_Table)
	fs.writeFile('./output/' + './src/' +'Habitat_Table.c', Habitat_Table, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Icon_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let icon_table = ''
icon_table += '#include "defines.h"\n#include "../include/sprite_data.h"\n\nconst u8* const gMonIconTable[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = gIconSprite000NoneTiles,\n'

for (i = 0; i < base_stats.length; i++) {
    if (i <= 8) icon_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = gIconSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles,\n'
    if (i > 8 && i < 99) icon_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = gIconSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles,\n'
    if (i > 98) icon_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = gIconSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles,\n'
}
	icon_table += '};'
	console.log(icon_table)
	fs.writeFile('./output/' + './src/' +'Icon_Table.c', icon_table, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* Icon_Palette_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let icon_pal_table = ''
icon_pal_table += '#include "defines.h"\n\nconst u8 gMonIconPaletteIndices[NUM_SPECIES] =\n{\n\t[SPECIES_NONE] = 0x0,\n'

for (i = 0; i < base_stats.length; i++) {
    icon_pal_table += '\t[SPECIES_' + stats[base_stats[i]][2].toUpperCase() + '] = ' + '0x0' + ',\n'
}
	icon_pal_table += '\n};'
	console.log(icon_pal_table)
	fs.writeFile('./output/' + './src/' +'Icon_Palette_Table.c', icon_pal_table, function (err) {
  if (err) throw err;
});
/* --------------------------------------------------------------------------------------------------*/
/* sprite_data.h */
/* --------------------------------------------------------------------------------------------------*/
let sprite_data = ''

sprite_data += '#pragma once\n\nextern const u8 gFrontSprite000NoneTiles[];\n'
for (i = 0; i < base_stats.length; i++) {
	if (i <= 8) sprite_data += 'extern const u8 gFrontSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 8 && i < 99) sprite_data += 'extern const u8 gFrontSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 98) sprite_data += 'extern const u8 gFrontSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
}
sprite_data += '\nextern const u8 gBackShinySprite000NoneTiles[];\n'
for (i = 0; i < base_stats.length; i++) {
	if (i <= 8) sprite_data += 'extern const u8 gBackShinySprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 8 && i < 99) sprite_data += 'extern const u8 gBackShinySprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 98) sprite_data += 'extern const u8 gBackShinySprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
}
sprite_data += '\n#pragma once\n\nextern const u8 gFrontSprite000NonePal[];\n'
for (i = 0; i < base_stats.length; i++) {
	if (i <= 8) sprite_data += 'extern const u8 gFrontSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
	if (i > 8 && i < 99) sprite_data += 'extern const u8 gFrontSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
	if (i > 98) sprite_data += 'extern const u8 gFrontSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
}
sprite_data += '\nextern const u8 gBackShinySprite000NonePal[];\n'
for (i = 0; i < base_stats.length; i++) {
	if (i <= 8) sprite_data += 'extern const u8 gBackShinySprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
	if (i > 8 && i < 99) sprite_data += 'extern const u8 gBackShinySprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
	if (i > 98) sprite_data += 'extern const u8 gBackShinySprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Pal[];\n'
}
sprite_data += '\nextern const u8 gIconSprite000NoneTiles[];\n'
for (i = 0; i < base_stats.length; i++) {
	if (i <= 8) sprite_data += 'extern const u8 gIconSprite00' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 8 && i < 99) sprite_data += 'extern const u8 gIconSprite0' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
	if (i > 98) sprite_data += 'extern const u8 gIconSprite' + (i+1) + /* stats[base_stats[i]][2] */'Kangaroo' + 'Tiles[];\n'
}


	console.log(sprite_data)
	fs.writeFile('./output/' + './include/' +'sprite_data.h', sprite_data, function (err) {
  if (err) throw err;
});

/* --------------------------------------------------------------------------------------------------*/
/* Pokemon_Name_Table.string */
/* --------------------------------------------------------------------------------------------------*/
let Pokemon_Name_Table_print = ''
Pokemon_Name_Table_print += 'MAX_LENGTH=10\nFILL_FF=True\n\n#org @gSpeciesNames\n#org @NAME_SPECIES_NONE\n??????\n\n'
for (k = 0; k < base_stats.length; k++) {

	Pokemon_Name_Table_print += '#org @NAME_' + stats[base_stats[k]][2].toUpperCase() + '\n' + 'CUPHOLDERS' + '\n\n'
}

	console.log(Pokemon_Name_Table_print)
	fs.writeFile('./output/' + './strings/' +'Pokemon_Name_Table.string', Pokemon_Name_Table_print, function (err) {
  if (err) throw err;
});

/* --------------------------------------------------------------------------------------------------*/
/* Pokedex_Data_Table.c */
/* --------------------------------------------------------------------------------------------------*/
let PokedexDataTable_print = ''
PokedexDataTable_print += '#include "defines.h"\n#include "../include/pokedex.h"\n#include "../include/text.h"\n\nconst struct PokedexEntry gPokedexEntries[NATIONAL_DEX_COUNT] =\n{\n\t[NATIONAL_DEX_NONE] =\n\t{\n\t\t.categoryName = {_U, _n, _k, _n, _o, _w, _n, _END, _SPACE, _SPACE, _SPACE, _SPACE},\n\t\t.height = 0,\n\t\t.weight = 0,\n\t\t.description = (const u8*) 0x8444c35,\n\t\t.unused = 19633,\n\t\t.pokemonScale = 2116,\n\t\t.pokemonOffset = 0,\n\t\t.trainerScale = 256,\n\t\t.trainerOffset = 0,\n\t\t.unknown1 = 256,\n\t\t.unknown2 = 0,\n\t},\n'
for (k = 0; k < pokedexData.length; k++) {
	PokedexDataTable_print += '\t[NATIONAL_DEX_' + DexEntries[pokedexData[k]][1].toUpperCase() + '] =\n\t{\n' + '\t\t.categoryName = {'

	for (j = 0; j < 12; j++) {
		letters = JSON.stringify(DexEntries[PokedexDataTable[k]][6][j])
		if (j === DexEntries[PokedexDataTable[k]][6].length) letters = '"END"'
		if (j > DexEntries[PokedexDataTable[k]][6].length) letters = '"SPACE"'
		JSON.parse(letters) === " " ? PokedexDataTable_print += '_SPACE, ' : j === 11 ? PokedexDataTable_print += '_' + letters.slice(1, -1) + '}, ' : PokedexDataTable_print += '_' + letters.slice(1, -1) + ', ';

	}

	PokedexDataTable_print += '\n\t\t.height = ' + DexEntries[pokedexData[k]][3] + ',\n' + '\t\t.weight = ' + DexEntries[pokedexData[k]][4] + ',\n' + '\t\t.description = DEX_ENTRY_' + DexEntries[pokedexData[k]][1].toUpperCase() + ',\n' + '\t\t.unused = 19633,\n\t\t.pokemonScale = 2116,\n\t\t.pokemonOffset = 0,\n\t\t.trainerScale = 256,\n\t\t.trainerOffset = 0,\n\t\t.unknown1 = 256,\n\t\t.unknown2 = 0,\n\t},\n'	
	}	
PokedexDataTable_print += '};\n\n//Certain Pokemon forms can have alternate dex entries when viewed\n//through the habitat viewer or when caught directly.\n#define ALTERNATE_ENTRY(species) {SPECIES_##species, DEX_ENTRY_##species}\n\nconst struct AlternateDexEntries gAlternateDexEntries[] =\n{\n' + '\t{SPECIES_TABLES_TERMIN, 0}\n};'
	console.log(PokedexDataTable_print)
	fs.writeFile('./output/' + './src/' +'Pokedex_Data_Table.c', PokedexDataTable_print, function (err) {
  if (err) throw err;
});

/* 
//Check to see if letter is space
    if(JSON.parse(letters) === " ") {
      //If it was a space return space 
      PokedexDataTable_print += '_SPACE, ' 
    }
    else {
      //Else it was a normal letter, now check if it was the end of the for loop (length-1 === 11)
      if(j === 11) {
        //If it was then return a closing bracket.
            PokedexDataTable_print += '_' + letters.slice(1, -1) + '}, '
          }
      else {
        //If it wasn't just yet, then return the letter as usual.
            PokedexDataTable_print += '_' + letters.slice(1, -1) + ', '
          }
    }

 */




















