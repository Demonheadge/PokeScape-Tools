
var util = require('util')
var fs = require('fs');
const { debug } = require('console');
const stats = require('./js folder/' + './PokeScape_Stats.js')
//const ev_yields = require('./js folder/' + './PokeScape_EVYeild.js')
//const evolution = require('./js folder/' + './PokeScape_Evolution.js')
//const level_up_moves = require('./js folder/' + './PokeScape_LevelUp_Moves.js')
//const tm_hm = require('./js folder/' + './PokeScape_TM_HM.js')
//const DexEntries = require('./js folder/' + './PokeScape_DexEntries.js')
//const learnsets = Object.keys(level_up_moves);
const base_stats = Object.keys(stats);
//const ev_yield_keys = Object.keys(ev_yields);
//const evolutions = Object.keys(evolution);
const speciesH = Object.keys(stats);
const pokedexH = Object.keys(stats);
//const pokedexData = Object.keys(DexEntries);
//const PokedexDataTable = Object.keys(DexEntries);
//const SpeciesToPokdexTable = Object.keys(DexEntries);
//const Enemy_Elevation_Table = Object.keys(DexEntries);
//const CryTable = Object.keys(DexEntries);
//const CryTable2 = Object.keys(DexEntries);
const pokemonIcon = Object.keys(stats);
const graphicsH = Object.keys(stats);

const PokeScapeMOVES = require('./js folder/' + './MOVES.js')
const PSMoves = Object.keys(PokeScapeMOVES);

const DexEntries = require('./js folder/' + './PokeScape_DexEntries.js')
const pokedexData = Object.keys(DexEntries);

const PokeScapeTMs = require('./js folder/' + './PokeScape_TM.js')
const TM_List = Object.keys(PokeScapeTMs);

const PokeScapeEvolutions = require('./js folder/' + './PokeScape_Evolution.js')
const Evolution_List = Object.keys(PokeScapeEvolutions);















/* for (i = 0; i < Object.keys(level_up_moves).length; i++) {
	console.log(Object.keys(level_up_moves[Object.keys(level_up_moves)[i]]) + '\n' + util.inspect(level_up_moves[Object.keys(level_up_moves)[i]][Object.keys(level_up_moves[Object.keys(level_up_moves)[i]])]))
} */




/* --------------------------------------------------------------------------------------------------*/
//GOOGLE DOC INFO COLUMNS
/* --------------------------------------------------------------------------------------------------*/
//PokeScape_Stats
ID = 0;
NAME = 1;
TYPE1 = 2;
TYPE2 = 3;
ABILITY1 = 4;
ABILITY2 = 5;
ABILITY3 = 39;
TOTALSTATS = 7;
HP = 8;
ATTACK = 9;
DEFENSE = 10;
SPATT = 11;
SPDEF = 12;
SPEED = 13;
HELDITEM1 = 15;
HELDITEM2 = 16;
EXPYEILD = 17;
EXPGROWTH = 18;
GENDERRATIO = 19;
CATCHRATE = 20;
FRIENDSHIP = 21;
EGGCYCLES = 22;
EGGGROUP1 = 23;
EGGGROUP2 = 24;
FLEERATE = 25;
EV_HP = 27;
EV_ATTACK = 28;
EV_DEFENSE = 29;
EV_SPATT = 30;
EV_SPDEF = 31;
EV_SPEED = 32;
INGAME_NAME = 38;

//PokeScape_MOVES
NEWMON_MOVE = 4;
ID_MOVE = 0;
NAME_MOVE = 1;
LEVEL_MOVE = 2;
MOVENAME_MOVE = 3;

//PokeScape_DexEntries
ID_DEX = 0;
NAME_DEX = 1;
DEXENTRIES_DEX = 2;
HEIGHT_DEX = 3;
WEIGHT_DEX = 4;
POKEDEX_NUMBER_DEX = 5;
CATEGORY_DEX = 6;

//PokeScape_TM
NEWMON_MOVE = 4;
ID_MOVE = 0;
NAME_MOVE = 1;
NUMBER_TM = 2;
MOVENAME_MOVE = 3;

//PokeScape Evolutions
EVO_ID = 0;
EVO_NAME = 1;
EVO_METHOD = 2;
EVO_SECONDARY = 3;
EVO_INTO_MON = 4;




/*
// Read the TSV file
fs.readFile('./tsv folder/' + 'PokeScape Main Sheet - EVOLUTION.tsv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the TSV data
    const lines = data.trim().split('\n');
    const jsObject = {};

    lines.forEach((line, index) => {
        const columns = line.split('\t');
        jsObject[index] = columns;
    });

    // Write the transformed data to a JavaScript file
    const jsCode = `module.exports = ${JSON.stringify(jsObject, null, 2)};`;

    fs.writeFile('./js folder/' + './EVOLUTIONz.js', jsCode, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('JavaScript file has been created.');
    });
});

*/








//START //Uncomment in order to run the function.
	//GBA
		//BuildGameCode();

	//WEBSITE
		//WebsiteJSON();
		WebsiteJSON_NEW();
		MOVEStest();


	//UNITY
		//UnityJSON();

		
		//ConvertTrainers();

		//BuildGameCode();
	//EXPANSION_BaseStats();
		//MOVES();								//*current
		//EXPANSION_frontpicAnims();
		//EXPANSION_learnset_pointers();
		///EXPANSION_ConvertTMList();              //*Current:       EXPANSION_TMListOutput.json
		//TestingEvolutionPrinting();

	//GBA
	function BuildGameCode() {	
		//species.h
			Define_Species();
		//pokemon_animation.c
			//Do Manually this is temp placeholders.
			animations();
		//pokemon_icon.c
			pokemon_icon();
		//graphics.h
			graphics();
		//pokemon.h
			pokemonH();
		//base_stats.h
			BaseStats();
		//evolution.h
		//level_up_learnset_pointers.h
			level_up_learnset_pointers();
		//level_up_learnsets.h
			MOVES();
		//tmhm_learnsets.h
		//back_pic_coordinates.h
		//footprint_table.h
		//front_pic_coordinates.h
		//species_names.h
			species_names()

			back_pic_coordinates();
			front_pic_coordinates();
			pokedex_entries();
			back_pic_table();
			front_pic_table();
			speciesToNational();
			anim_mon_front_pics();
		
			//ConvertTMList();
	}











//#region Base_Stats.c
function BaseStats() {

	let base_stats_print = '';
	base_stats_print += '#include "defines.h"\n#include "../include/abilities.h"\n#include "../include/items.h"\n#include "../include/base_stats.h"\n\n// Maximum value for a female Pokémon is 254 (MON_FEMALE) which is 100% female.\n// 255 (MON_GENDERLESS) is reserved for genderless Pokémon.\n#define PERCENT_FEMALE(percent) min(254, ((percent * 255) / 100))\n\nconst struct BaseStats gBaseStats[] = \n{\n	[SPECIES_NONE] = {0},\n\n'
	for (k = 0; k < base_stats.length; k++) {
	/* 	if (stats[base_stats[k]][2] === '') stats[base_stats[k]][2] = stats[base_stats[k]][0] */

//If data is empty fill with placeholder data
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';

	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = '0';
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = '0';
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = '0';
	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = '0';
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = '0';
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = '0';

	if (stats[base_stats[k]][EXPYEILD] === "") stats[base_stats[k]][EXPYEILD] = '0';
	if (stats[base_stats[k]][EXPGROWTH] === "") stats[base_stats[k]][EXPGROWTH] = 'MEDIUM_SLOW';
	if (stats[base_stats[k]][GENDERRATIO] === "") stats[base_stats[k]][GENDERRATIO] = 'MON_GENDERLESS';
	if (stats[base_stats[k]][CATCHRATE] === "") stats[base_stats[k]][CATCHRATE] = '0';
	if (stats[base_stats[k]][FRIENDSHIP] === "") stats[base_stats[k]][FRIENDSHIP] = '0';
	if (stats[base_stats[k]][EGGCYCLES] === "") stats[base_stats[k]][EGGCYCLES] = '0';

	if (stats[base_stats[k]][EGGGROUP1] === "") stats[base_stats[k]][EGGGROUP1] = 'NONE';

	if (stats[base_stats[k]][FLEERATE] === "") stats[base_stats[k]][FLEERATE] = '0';






//If TYPE2 is empty, then use TYPE1.
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = stats[base_stats[k]][TYPE1]
//SPECIES NAME
	base_stats_print += '\t[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase().replace(/ /g, '_')/* .replace(/_/g, '') *//* .replace(/-/g, '') */.replace('.', '') 
//STATS
	base_stats_print += '] =\n\t{\n\t\t.baseHP = ' + stats[base_stats[k]][HP] + ',\n\t\t.baseAttack = ' + stats[base_stats[k]][ATTACK] + ',\n\t\t.baseDefense = ' + stats[base_stats[k]][DEFENSE] + ',\n\t\t.baseSpAttack = ' + stats[base_stats[k]][SPATT] + ',\n\t\t.baseSpDefense = ' + stats[base_stats[k]][SPDEF] + ',\n\t\t.baseSpeed = ' + stats[base_stats[k]][SPEED]
//TYPES
	
	base_stats_print += ',\n\t\t.type1 = TYPE_' + stats[base_stats[k]][TYPE1].toUpperCase() + ',\n\t\t.type2 = TYPE_' + stats[base_stats[k]][TYPE2].toUpperCase()
//Extra Info
	base_stats_print += ',\n\t\t.catchRate = ' + stats[base_stats[k]][CATCHRATE] + ',\n\t\t.expYield = ' + stats[base_stats[k]][EXPYEILD]
//EV YIELD
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = '0';
	base_stats_print += ',\n\t\t.evYield_HP = ' + stats[base_stats[k]][EV_HP]
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = '0';
    base_stats_print += ',\n\t\t.evYield_Attack = ' + stats[base_stats[k]][EV_ATTACK]
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = '0';
    base_stats_print += ',\n\t\t.evYield_Defense = ' + stats[base_stats[k]][EV_DEFENSE]
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = '0';
    base_stats_print += ',\n\t\t.evYield_SpAttack = ' + stats[base_stats[k]][EV_SPATT]
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = '0';
    base_stats_print += ',\n\t\t.evYield_SpDefense = ' + stats[base_stats[k]][EV_SPDEF]
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = '0';
    base_stats_print += ',\n\t\t.evYield_Speed = ' + stats[base_stats[k]][EV_SPEED]
//HELD ITEMS	
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'ITEM_NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'ITEM_NONE';
	base_stats_print += ',\n\t\t.itemCommon = ' + stats[base_stats[k]][HELDITEM1].toUpperCase() + ',\n\t\t.itemRare = ' + stats[base_stats[k]][HELDITEM2].toUpperCase() 
//GENDER
	if (stats[base_stats[k]][GENDERRATIO] === 'Genderless') stats[base_stats[k]][GENDERRATIO] = 'MON_GENDERLESS'
	if (stats[base_stats[k]][GENDERRATIO] === '0') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(0)"
	if (stats[base_stats[k]][GENDERRATIO] === '12.5') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(12.5)"
	if (stats[base_stats[k]][GENDERRATIO] === '40') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(40)"
	if (stats[base_stats[k]][GENDERRATIO] === '50') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(50)"
	if (stats[base_stats[k]][GENDERRATIO] === '75') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(75)"
	if (stats[base_stats[k]][GENDERRATIO] === '100') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(100)"
	base_stats_print += ',\n\t\t.genderRatio = ' + stats[base_stats[k]][GENDERRATIO]
//EGG CYCLES
base_stats_print += ',\n\t\t.eggCycles = ' + stats[base_stats[k]][EGGCYCLES] 
//FRIENDSHIP 
base_stats_print += ',\n\t\t.friendship = ' + stats[base_stats[k]][FRIENDSHIP]
//GROWTH RATE
base_stats_print += ',\n\t\t.growthRate = GROWTH_' + stats[base_stats[k]][EXPGROWTH].toUpperCase().replace(/ /g, '_')
//EGG GROUP
if (stats[base_stats[k]][EGGGROUP2] === '') stats[base_stats[k]][EGGGROUP2] = stats[base_stats[k]][EGGGROUP1];
base_stats_print += ',\n\t\t.eggGroup1 = EGG_GROUP_' + stats[base_stats[k]][EGGGROUP1].toUpperCase().replace(/ /g, '') + ',\n\t\t.eggGroup2 = EGG_GROUP_' + stats[base_stats[k]][EGGGROUP2].toUpperCase().replace(/ /g, '') + ","
//ABILITIES
	if (stats[base_stats[k]][ABILITY1] === '') stats[base_stats[k]][ABILITY1] = 'NONE';
	if (stats[base_stats[k]][ABILITY2] === '') stats[base_stats[k]][ABILITY2] = 'NONE';
	if (stats[base_stats[k]][ABILITY3] === '') stats[base_stats[k]][ABILITY3] = 'NONE';
	//base_stats_print += ',\n\t\t.ability1 = ABILITY_' + stats[base_stats[k]][ABILITY1].toUpperCase().replace(/ /g, '') + ',\n\t\t.ability2 = ABILITY_' + stats[base_stats[k]][ABILITY2].toUpperCase().replace(/ /g, '')
	base_stats_print += "\n\t\t.abilities = {" + "ABILITY_" + stats[base_stats[k]][ABILITY1].toUpperCase().replace(/ /g, '') + ", " + "ABILITY_" + stats[base_stats[k]][ABILITY2].toUpperCase().replace(/ /g, '') + "},"
//FLEE RATE
	base_stats_print += '\n\t\t.safariZoneFleeRate = ' + stats[base_stats[k]][FLEERATE]  + ","
//HIDDEN ABILITY 
	//base_stats_print += ',\n\t\t.hiddenAbility = ABILITY_' + stats[base_stats[k]][ABILITY3].toUpperCase().replace(/ /g, '') 
//BODY COLOR
	base_stats_print +='\n\t\t.bodyColor = BODY_COLOR_BLACK,'
//FLIP
	base_stats_print +='\n\t\t.noFlip = TRUE,'
	base_stats_print += '\n\t},\n\n'
}
	base_stats_print += '};'
    console.log(base_stats_print)
	fs.writeFile('./output/' + 'Base_Stats.c', base_stats_print, function (err) {
  if (err) throw err;
});

};
//#endregion


//#region species.h
function Define_Species() {

//Define Species
	let speciesH_print = ''
	speciesH_print += '\n#define SPECIES_NONE 0\n'
	for (k = 0; k < speciesH.length; k++) {
		speciesH_print += '#define SPECIES_' + stats[speciesH[k]][NAME].toUpperCase() + ' ' + (k+412) + '\n'
		//HEX = (k+1).toString(16).toUpperCase()
	}

	speciesH_print += "\n\n\n\n\n"

//Define National Dex
	speciesH_print += '\n#define NATIONAL_DEX_NONE 0\n'
	for (k = 0; k < speciesH.length; k++) {
		speciesH_print += '#define NATIONAL_DEX_' + stats[speciesH[k]][NAME].toUpperCase() + ' ' + (k+1) + '\n'
		//HEX = (k+1).toString(16).toUpperCase()
	}

	speciesH_print += "\n\n\n\n\n"

//Define Hoenn Dex
speciesH_print += '\n#define HOENN_DEX_NONE 0\n'
for (k = 0; k < speciesH.length; k++) {
	speciesH_print += '#define HOENN_DEX_' + stats[speciesH[k]][NAME].toUpperCase() + ' ' + (k+387) + '\n'
	//HEX = (k+1).toString(16).toUpperCase()
}

	speciesH_print += "\n\n\n\n\n"

		console.log(speciesH_print)
		fs.writeFile('./output/' +'Species.h', speciesH_print, function (err) {
	if (err) throw err;
	});

};
//#endregion


//#region pokemon_icon.c
function pokemon_icon() {

	let pokemonIcon_print = ''
	for (k = 0; k < base_stats.length; k++) {
		pokemonIcon_print += '[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase() + '] = gMonIcon_' + stats[base_stats[k]][NAME] + ',\n'
		//pokemonIcon_print += '[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase() + '] = gMonIcon_Guthling,\n'
	}


	pokemonIcon_print += "\n\n\n\n\n"

//Pokemon Icon Color #Number
	for (k = 0; k < base_stats.length; k++) {
		pokemonIcon_print += '[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase() + '] = 0,\n'
	}


	console.log(pokemonIcon_print)
		fs.writeFile('./output/' +'pokemon_icon.c', pokemonIcon_print, function (err) {
	if (err) throw err;
	});

};
//#endregion


//#region graphics.h
function graphics() {

	let graphicsH_print = ''
	for (k = 0; k < base_stats.length; k++) {
		graphicsH_print += "extern const u32 gMonFrontPic_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u32 gMonPalette_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u32 gMonBackPic_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u32 gMonShinyPalette_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u32 gMonStillFrontPic_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u8 gMonIcon_" + stats[base_stats[k]][NAME] + "[];\n"
		graphicsH_print += "extern const u8 gMonFootprint_" + stats[base_stats[k]][NAME] + "[];\n"
	}

	graphicsH_print += "\n\n\n\n\n"

	console.log(graphicsH_print)
		fs.writeFile('./output/' +'graphics.h', graphicsH_print, function (err) {
	if (err) throw err;
	});
};
//#endregion


//#region pokemon.h
function pokemonH() {

	//Replace $ with "
	let pokemonH_print = ''
	for (k = 0; k < base_stats.length; k++) {
		pokemonH_print += "const u32 gMonStillFrontPic_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/front.4bpp.lz\");\n"
		pokemonH_print += "const u32 gMonPalette_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/normal.gbapal.lz\");\n"
		pokemonH_print += "const u32 gMonBackPic_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/back.4bpp.lz\");\n"
		pokemonH_print += "const u32 gMonShinyPalette_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/shiny.gbapal.lz\");\n"
		pokemonH_print += "const u8 gMonIcon_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U8(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/icon.4bpp\");\n"
		pokemonH_print += "const u8 gMonFootprint_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U8(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/footprint.1bpp\");\n"
		pokemonH_print += "\n"
/*
		pokemonH_print += "const u32 gMonStillFrontPic_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/front.4bpp.lz\");\n"
		pokemonH_print += "const u32 gMonPalette_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/normal.gbapal.lz\");\n"
		pokemonH_print += "const u32 gMonBackPic_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/back.4bpp.lz\");\n"
		pokemonH_print += "const u32 gMonShinyPalette_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/shiny.gbapal.lz\");\n"
		pokemonH_print += "const u8 gMonIcon_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/icon.4bpp\");\n"
		pokemonH_print += "const u8 gMonFootprint_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/ACupHolder/footprint.1bpp\");\n"
		pokemonH_print += "\n"*/
	}
	

	
	pokemonH_print += "\n\n\n\n\n"

	console.log(pokemonH_print)
		fs.writeFile('./output/' +'pokemon.h', pokemonH_print, function (err) {
	if (err) throw err;
	});
};
//#endregion


//#region level_up_learnset_pointers.h
function level_up_learnset_pointers() {

	let level_up_learnset_pointers_print = ''
	for (k = 0; k < base_stats.length; k++) {
		level_up_learnset_pointers_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] = s"+ stats[base_stats[k]][NAME] + "LevelUpLearnset,\n"
	}

	level_up_learnset_pointers_print += "\n\n\n\n\n"

	console.log(level_up_learnset_pointers_print)
		fs.writeFile('./output/' + 'level_up_learnset_pointers.h', level_up_learnset_pointers_print, function (err) {
	if (err) throw err;
	});
};
//#endregion


//#region LevelUp_Movesets
function MOVES() {

	let MOVES_print = ''
	for (k = 0; k < PSMoves.length; k++) {
		if (PokeScapeMOVES[PSMoves[k]][LEVEL_MOVE] === "") {
			MOVES_print += "LEVEL_UP_END\n};\n\n"
			MOVES_print += "static const struct LevelUpMove s" + PokeScapeMOVES[PSMoves[k]][NAME_MOVE] + "LevelUpLearnset[] = {\n"
		}
		if (PokeScapeMOVES[PSMoves[k]][NAME_MOVE] === "") {
			MOVES_print += "LEVEL_UP_MOVE(" + PokeScapeMOVES[PSMoves[k]][LEVEL_MOVE].toUpperCase() + ", MOVE_"+ PokeScapeMOVES[PSMoves[k]][MOVENAME_MOVE] + "),\n"
		}
	}
	MOVES_print += "\n\n\n\n\n"
	console.log(MOVES_print)
		fs.writeFile('./output/' + 'MOVES.h', MOVES_print, function (err) {
	if (err) throw err;
	});
};
//#endregion


//#region species_names.h
//replace $ with "
function species_names() {

	let species_names_print = ''
	for (k = 0; k < base_stats.length; k++) {
		//species_names_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] = _(\"" + stats[base_stats[k]][NAME].replace( "_" , " ") + "\"),\n"

		//cupholders
		species_names_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] = _(\"CUPHOLDER\"),\n"

		

/*
		.replace( "_Form" , "")
		.replace( "_RSHD" , "")
		.replace( "_Pink" , "")
		.replace( "_OSRS" , "")
		.replace( "_RS3" , "")
		.replace( "_Punished" , "")
		.replace( "_DeepSea" , "")
		.replace( "Rewards_" , "")
		.replace( "Coral_" , "")
		.replace( "_Black" , "")
		.replace( "_Giant" , "")
		.replace( "_Plutonial" , "")
		.replace( "_Crimson" , "")
		.replace( "_Grey" , "")
		.replace( "_Baby" , "")
		.replace( "_Cobalt" , "")

		//last replace
		.replace( "_" , " ")
*/

	}
	
	species_names_print += "\n\n\n\n\n"

	console.log(species_names_print)
		fs.writeFile('./output/' + 'species_names.h', species_names_print, function (err) {
	if (err) throw err;
	});
};
//#endregion





//#region animations
//replace $ with "
function animations() {

	let species_names_print = ''
	for (k = 0; k < base_stats.length; k++) {
		species_names_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] = BACK_ANIM_H_SLIDE,\n"
	}
	
	species_names_print += "\n\n\n\n\n"

	console.log(species_names_print)
		fs.writeFile('./output/' + 'pokemon_animations.c', species_names_print, function (err) {
	if (err) throw err;
	});
};
//#endregion



//#region back_pic_coordinates.h
function back_pic_coordinates() {

	let back_pic_coordinates_print = ''
	for (k = 0; k < base_stats.length; k++) {
		back_pic_coordinates_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] =\n"
		back_pic_coordinates_print += "{\n\t.size = 0x0,\n\t.y_offset = 0,\n},\n"
	}
	
	back_pic_coordinates_print += "\n\n\n\n\n"

	console.log(back_pic_coordinates_print)
		fs.writeFile('./output/' + 'back_pic_coordinates.h', back_pic_coordinates_print, function (err) {
	if (err) throw err;
	});
};
//#endregion

//#region front_pic_coordinates.h
function front_pic_coordinates() {

	let front_pic_coordinates_print = ''
	for (k = 0; k < base_stats.length; k++) {
		front_pic_coordinates_print += "[SPECIES_" + stats[base_stats[k]][NAME].toUpperCase() + "] =\n"
		front_pic_coordinates_print += "{\n\t.size = 0x0,\n\t.y_offset = 0,\n},\n"
	}
	
	front_pic_coordinates_print += "\n\n\n\n\n"

	console.log(front_pic_coordinates_print)
		fs.writeFile('./output/' + 'front_pic_coordinates.h', front_pic_coordinates_print, function (err) {
	if (err) throw err;
	});
};
//#endregion









//#region pokedex_entries
function pokedex_entries() {

	let pokedex_entries_print = ''
	for (k = 0; k < pokedexData.length; k++) {

		if (DexEntries[pokedexData[k]][HEIGHT_DEX] === "") DexEntries[pokedexData[k]][HEIGHT_DEX] = '0';
		if (DexEntries[pokedexData[k]][WEIGHT_DEX] === "") DexEntries[pokedexData[k]][WEIGHT_DEX] = '0';

		pokedex_entries_print += "\t[NATIONAL_DEX_" + DexEntries[pokedexData[k]][NAME_DEX].toUpperCase() + "] =\n"
		pokedex_entries_print += "\t{\n"
		pokedex_entries_print += "\t.categoryName = _(\"" + DexEntries[pokedexData[k]][CATEGORY_DEX] + "\"),\n"
		pokedex_entries_print += "\t.height = " + DexEntries[pokedexData[k]][HEIGHT_DEX] + ",\n"
		pokedex_entries_print += "\t.weight = " + DexEntries[pokedexData[k]][WEIGHT_DEX] + ",\n"
		pokedex_entries_print += "\t.description = g" + DexEntries[pokedexData[k]][NAME_DEX] + "PokedexText,\n"
		pokedex_entries_print += "\t.pokemonScale = " + "256 " + ",\n"
		pokedex_entries_print += "\t.pokemonOffset = " + "0 " + ",\n"
		pokedex_entries_print += "\t.trainerScale = " + "256 " + ",\n"
		pokedex_entries_print += "\t.trainerOffset = " + "0 " + ",\n"

		pokedex_entries_print += "\t},\n\n"
	}
	
	pokedex_entries_print += "\n\n\n\n\n"



//Pokedex entry data information
	for (k = 0; k < pokedexData.length; k++) {

		pokedex_entries_print += "const u8 g" + DexEntries[pokedexData[k]][NAME_DEX] + "PokedexText[] = _(\n"
		//pokedex_entries_print += "\"" + DexEntries[pokedexData[k]][DEXENTRIES_DEX] + "\");\n"

		pokedex_entries_print += "\"" + wordwrap(DexEntries[pokedexData[k]][DEXENTRIES_DEX], 35) + "\");\n"
		pokedex_entries_print += "\n\n"
	}


	console.log(pokedex_entries_print)
		fs.writeFile('./output/' + 'pokedex_entries.h', pokedex_entries_print, function (err) {
	if (err) throw err;
	});
};
//#endregion







//#region back_pic_table.h
function back_pic_table() {

	let back_pic_table_print = ''
	for (k = 0; k < base_stats.length; k++) {
		back_pic_table_print += "SPECIES_SPRITE(" + stats[base_stats[k]][NAME].toUpperCase() + ", gMonBackPic_" + stats[base_stats[k]][NAME] + "),\n"
		//back_pic_table_print += "SPECIES_SPRITE(" + stats[base_stats[k]][NAME].toUpperCase() + ", gMonBackPic_Frogeel),\n"
	}
	
	back_pic_table_print += "\n\n\n\n\n"

	console.log(back_pic_table_print)
		fs.writeFile('./output/' + 'back_pic_table.h', back_pic_table_print, function (err) {
	if (err) throw err;
	});
};
//#endregion

//#region front_pic_table.h
function front_pic_table() {

	let front_pic_table_print = ''
	for (k = 0; k < base_stats.length; k++) {
		front_pic_table_print += "SPECIES_SPRITE(" + stats[base_stats[k]][NAME].toUpperCase() + ", gMonFrontPic_" + stats[base_stats[k]][NAME] + "),\n"
		//front_pic_table_print += "SPECIES_SPRITE(" + stats[base_stats[k]][NAME].toUpperCase() + ", gMonFrontPic_Frogeel),\n"
	}
	
	front_pic_table_print += "\n\n\n\n\n"

	console.log(front_pic_table_print)
		fs.writeFile('./output/' + 'front_pic_table.h', front_pic_table_print, function (err) {
	if (err) throw err;
	});
};
//#endregion

//#region pokemon.c speciesToNational
function speciesToNational() {

	let speciesToNational_print = ''
	for (k = 0; k < base_stats.length; k++) {
		speciesToNational_print += "SPECIES_TO_NATIONAL(" + stats[base_stats[k]][NAME].toUpperCase() + "),\n"
		
	}
	
	speciesToNational_print += "\n\n\n\n\n"

	console.log(speciesToNational_print)
		fs.writeFile('./output/' + 'speciesToNational.h', speciesToNational_print, function (err) {
	if (err) throw err;
	});
};
//#endregion













//#region pokemon_animation.c
//[SPECIES_GUTHLING] = BACK_ANIM_H_SLIDE,
function pokemon_animation() {

//DO MANUALLY

};
//#endregion

//#region Pokedex_Data.string
function PokedexData() {

	let pokedexData_print = ''

	for (k = 0; k < pokedexData.length; k++) {
		pokedexData_print += '#org @DEX_ENTRY_' + DexEntries[pokedexData[k]][1].toUpperCase() + '\n' + DexEntries[pokedexData[k]][2] + '\n\n'
		
	}
		console.log(pokedexData_print)
		fs.writeFile('./output/' +'Pokedex_Data.string', pokedexData_print, function (err) {
	if (err) throw err;
	});

};

//#endregion

//#region Species_To_Pokdex_Table.c
function SpeciesToPokedexTable() {

let SpeciesToPokdexTable_print = ''
	SpeciesToPokdexTable_print += '#include "defines.h"\n#include "../include/pokedex.h"\n\nconst u16 gSpeciesToNationalPokedexNum[NUM_SPECIES - 1] =\n{\n'
for (k = 0; k < SpeciesToPokdexTable.length; k++) {
	SpeciesToPokdexTable_print += '\t[SPECIES_' + DexEntries[SpeciesToPokdexTable[k]][1].toUpperCase() +  ' - 1] = NATIONAL_DEX_' + DexEntries[SpeciesToPokdexTable[k]][1].toUpperCase() + ',\n'
}
	SpeciesToPokdexTable_print += '};'
	console.log(SpeciesToPokdexTable_print)
	fs.writeFile('./output/' +'Species_To_Pokdex_Table.c', SpeciesToPokdexTable_print, function (err) {
  if (err) throw err;
});

};

//#endregion








//#region anim_mon_front_pics.c
function anim_mon_front_pics() {

	let anim_mon_front_pics_print = ''
	for (k = 0; k < base_stats.length; k++) {
		anim_mon_front_pics_print += "const u32 gMonFrontPic_" + stats[base_stats[k]][NAME] + "[] = INCBIN_U32(\"graphics/pokescape_monsters/" + stats[base_stats[k]][NAME] + "/anim_front.4bpp.lz\");\n"
		
	}

	anim_mon_front_pics_print += "\n\n\n\n\n"

	console.log(anim_mon_front_pics_print)
		fs.writeFile('./output/' +'anim_mon_front_pics_print.c', anim_mon_front_pics_print, function (err) {
	if (err) throw err;
	});
};
//#endregion

































function wordwrap(long_string, max_char, max_lines){
	if (typeof max_lines == "undefined"){
		max_lines = 4;
	}

	var sum_length_of_words = function(word_array){
		var out = 0;
		if (word_array.length!=0){
			for (var i=0; i<word_array.length; i++){
				var word = word_array[i];
				out = out + word.length;
			}
		};
		return out;
	};


	var chunkString = function (str, length){
		return str.match(new RegExp('.{1,' + length + '}', 'g'));
	};

	var splitLongWord = function (word, maxChar){
		var out = [];
		if( maxChar >= 1){
			var wordArray = chunkString(word, maxChar-1);// just one under maxChar in order to add the innerword separator '-'
			if(wordArray.length >= 1){
				// Add every piece of word but the last, concatenated with '-' at the end
				for(var i=0; i<(wordArray.length-1); i++){
					var piece = wordArray[i] + "-";
					out.push(piece);
				}
				// finally, add the last piece
				out.push(wordArray[wordArray.length-1]);
			}
		}
		// If nothing done, just use the same word
		if(out.length == 0) {
			out.push(word);
		}
		return out;
	}

	var split_out = [[]];
	var split_string = long_string.split(' ');
	for(var i=0; i<split_string.length; i++){
		var word = split_string[i];

		// If the word itself exceed the max length, split it,
		if(word.length > max_char){
			var wordPieces = splitLongWord(word, max_char);
			for(var i=0;i<wordPieces.length;i++){
				var wordPiece = wordPieces[i];
				if (split_out.length >= max_lines){
				return "ERROR_INPUT_TOO_LONG";
				}
				if (split_out[0].length > 0){
				split_out = split_out.concat([[]]);
				}
				split_out[split_out.length-1] = split_out[split_out.length-1].concat(wordPiece);
			}

		} else {
			// otherwise add it if possible
			if ((sum_length_of_words(split_out[split_out.length-1]) + word.length) > max_char){
			if (split_out.length >= max_lines){
				return "ERROR_INPUT_TOO_LONG";
			}
			split_out = split_out.concat([[]]);
			}

			split_out[split_out.length-1] = split_out[split_out.length-1].concat(word);
		}
	}

	for (var i=0; i<split_out.length; i++){
		split_out[i] = split_out[i].join(" ");
	}

	return split_out.join('\\n\"\n\t\t\t\"');
};




















//WEBSITE JSON
function WebsiteJSON() {



	let WebsiteJSON_print = '{\n'
	for (k = 0; k < base_stats.length; k++) {


//EDIT THE DATA FIRST
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = 'NONE';
	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = 0;
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = 0;
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = 0;
	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = 0;
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = 0;
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = 0;
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = 0;
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = 0;
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = 0;
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = 0;
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = 0;
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = 0;
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'NONE';
	if (stats[base_stats[k]][HELDITEM1] === '-') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '-') stats[base_stats[k]][HELDITEM2] = 'NONE';


	WebsiteJSON_print += "{" 
	//WebsiteJSON_print += "\t\t\"" + stats[base_stats[k]][ID] + "\": {\n"

	//WebsiteJSON_print += "\t\t\t\"" + "MONSTER" + "\": {\n"
	WebsiteJSON_print += "\"" + "id" + "\":\"" + stats[base_stats[k]][ID] + "\","
	//WebsiteJSON_print += "\"" + "squadno" + "\": \"" + stats[base_stats[k]][ID] + "\","
	WebsiteJSON_print += "\"" + "name" + "\":\"" + stats[base_stats[k]][NAME].replace(/_/g, ' ') + "\","
	WebsiteJSON_print += "\"" + "imgsrc" + "\":\"img/player/" + stats[base_stats[k]][ID] + ".png\","
	//WebsiteJSON_print += "\t\t\t},\n"

	//WebsiteJSON_print += "\t\t\t\"" + "STATS" + "\": {\n"
	WebsiteJSON_print += "\"" + "type_1" + "\": \"" + stats[base_stats[k]][TYPE1] + "\","
	WebsiteJSON_print += "\"" + "type_2" + "\": \"" + stats[base_stats[k]][TYPE2] + "\","
	WebsiteJSON_print += "\"" + "ability_1" + "\": \"" + stats[base_stats[k]][ABILITY1] + "\","
	WebsiteJSON_print += "\"" + "ability_2" + "\": \"" + stats[base_stats[k]][ABILITY2] + "\","
	WebsiteJSON_print += "\"" + "stats_total" + "\": " + stats[base_stats[k]][TOTALSTATS] + ","
	WebsiteJSON_print += "\"" + "hp" + "\": " + stats[base_stats[k]][HP] + ","
	WebsiteJSON_print += "\"" + "attack" + "\": " + stats[base_stats[k]][ATTACK] + ","
	WebsiteJSON_print += "\"" + "defense" + "\": " + stats[base_stats[k]][DEFENSE] + ","
	WebsiteJSON_print += "\"" + "special_attack" + "\": " + stats[base_stats[k]][SPATT] + ","
	WebsiteJSON_print += "\"" + "special_defense" + "\": " + stats[base_stats[k]][SPDEF] + ","
	WebsiteJSON_print += "\"" + "speed" + "\": " + stats[base_stats[k]][SPEED] + ","
	//WebsiteJSON_print += "\t\t\t},\n"


	//WebsiteJSON_print += "\t\t\t\"" + "MOREINFO" + "\": {\n"
	WebsiteJSON_print += "\"" + "held_item_1" + "\": \"" + stats[base_stats[k]][HELDITEM1] + "\","
	WebsiteJSON_print += "\"" + "held_item_2" + "\": \"" + stats[base_stats[k]][HELDITEM2] + "\","
	WebsiteJSON_print += "\"" + "exp_yeild" + "\": \"" + stats[base_stats[k]][EXPYEILD] + "\","
	WebsiteJSON_print += "\"" + "exp_growth" + "\": \"" + stats[base_stats[k]][EXPGROWTH].toUpperCase() + "\","
	WebsiteJSON_print += "\"" + "gender_ratio" + "\": \"" + stats[base_stats[k]][GENDERRATIO] + "\","
	WebsiteJSON_print += "\"" + "catch_rate" + "\": \"" + stats[base_stats[k]][CATCHRATE] + "\","
	WebsiteJSON_print += "\"" + "friendship" + "\": \"" + stats[base_stats[k]][FRIENDSHIP] + "\","
	WebsiteJSON_print += "\"" + "egg_cycles" + "\": \"" + stats[base_stats[k]][EGGCYCLES] + "\","
	WebsiteJSON_print += "\"" + "egg_group_1" + "\": \"" + stats[base_stats[k]][EGGGROUP1].toUpperCase() + "\","
	WebsiteJSON_print += "\"" + "egg_group_2" + "\": \"" + stats[base_stats[k]][EGGGROUP2].toUpperCase() + "\","
	WebsiteJSON_print += "\"" + "flee_rate" + "\": \"" + stats[base_stats[k]][FLEERATE] + "\","
	WebsiteJSON_print += "\"" + "EV_hp" + "\": " + stats[base_stats[k]][EV_HP] + ","
	WebsiteJSON_print += "\"" + "EV_attack" + "\": " + stats[base_stats[k]][EV_ATTACK] + ","
	WebsiteJSON_print += "\"" + "EV_defense" + "\": " + stats[base_stats[k]][EV_DEFENSE] + ","
	WebsiteJSON_print += "\"" + "EV_special_attack" + "\": " + stats[base_stats[k]][EV_SPATT] + ","
	WebsiteJSON_print += "\"" + "EV_special_defense" + "\": " + stats[base_stats[k]][EV_SPDEF] + ","
	WebsiteJSON_print += "\"" + "EV_speed" + "\": " + stats[base_stats[k]][EV_SPEED] + ","
	//WebsiteJSON_print += "\t\t\t},\n"

	for (j = 0; j < pokedexData.length; j++) {
		if (DexEntries[pokedexData[j]][ID_DEX] === stats[base_stats[k]][ID]) {
			//WebsiteJSON_print += "\t\t\t\t\tDATA FOUND " + "STATS ID: " + stats[base_stats[k]][ID] + " DEX ID " + DexEntries[pokedexData[j]][ID_DEX] + "\n"
			if (DexEntries[pokedexData[j]][HEIGHT_DEX] === "") DexEntries[pokedexData[j]][HEIGHT_DEX] = 0;
			if (DexEntries[pokedexData[j]][WEIGHT_DEX] === "") DexEntries[pokedexData[j]][WEIGHT_DEX] = 0;

			//WebsiteJSON_print += "\t\t\t\"" + "DEX" + "\": {\n"
			WebsiteJSON_print += "\"" + "pokedex_number" + "\": \"" + DexEntries[pokedexData[j]][POKEDEX_NUMBER_DEX] + "\","
			WebsiteJSON_print += "\"" + "dex_entry" + "\": \"" + DexEntries[pokedexData[j]][DEXENTRIES_DEX] + "\","
			WebsiteJSON_print += "\"" + "height" + "\": " + DexEntries[pokedexData[j]][HEIGHT_DEX] + ","
			WebsiteJSON_print += "\"" + "weight" + "\": " + DexEntries[pokedexData[j]][WEIGHT_DEX] + ","
			WebsiteJSON_print += "\"" + "category" + "\": \"" + DexEntries[pokedexData[j]][CATEGORY_DEX] + "\","
			//WebsiteJSON_print += "\t\t\t}\n"
			//WebsiteJSON_print += "\t\t}\n"	
		}
	}
/*
	//Insert TMs here
	//PokeScape_TM
	TM_ID_NUMBER = 0;
	TM_MONSTER_NAME = 1;
	TM_01 = 2;
	TM_02 = 3;
	TM_03 = 4;
	TM_04 = 5;
	TM_05 = 6;
	TM_06 = 7;
	TM_07 = 8;
	TM_08 = 9;
	TM_09 = 10;
	TM_10 = 11;
	TM_11 =	12;
	TM_12 =	13;
	TM_13 =	14;
	TM_14 =	15;
	TM_15 =	16;
	TM_16 =	17;
	TM_17 =	18;
	TM_18 =	19;
	TM_19 =	20;
	TM_20 =	21;
	TM_21 =	22;
	TM_22 =	23;
	TM_23 =	24;
	TM_24 =	25;
	TM_25 =	26;
	TM_26 =	27;
	TM_27 =	28;
	TM_28 =	29;
	TM_29 =	30;
	TM_30 =	31;
	TM_31 =	32;
	TM_32 =	33;
	TM_33 =	34;
	TM_34 =	35;
	TM_35 =	36;
	TM_36 =	37;
	TM_37 =	38;
	TM_38 =	39;
	TM_39 =	40;
	TM_40 =	41;
	TM_41 =	42;
	TM_42 =	43;
	TM_43 =	44;
	TM_44 =	45;
	TM_45 =	46;
	TM_46 =	47;
	TM_47 =	48;
	TM_48 =	49;
	TM_49 =	50;
	TM_50 =	51;
	TM_51 =	52;
	TM_52 =	53;
	TM_53 =	54;
	TM_54 =	55;
	TM_55 =	56;
	TM_56 =	57;
	TM_57 =	58;
	TM_58 =	59;
	TM_59 =	60;
	TM_60 =	61;
	TM_61 =	62;
	TM_62 =	63;
	TM_63 =	64;
	TM_64 =	65;
	TM_65 =	66;
	TM_66 =	67;

		for (j = 0; j < pokedexData.length; j++) {
		if (PokeScapeTMs[TM_List[j]][TM_ID_NUMBER] === stats[base_stats[k]][ID]) {
		z = 0;
	
				if (PokeScapeTMs[TM_List[j]][TM_01] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_01].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_01].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_02] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_02].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_02].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_03] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_03].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_03].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_04] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_04].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_04].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_05] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_05].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_05].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_06] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_06].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_06].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_07] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_07].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_07].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_08] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_08].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_08].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_09] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_09].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_09].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_10] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_10].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_10].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_11] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_11].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_11].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_12] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_12].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_12].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_13] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_13].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_13].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_14] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_14].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_14].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_15] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_15].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_15].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_16] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_16].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_16].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_17] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_17].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_17].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_18] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_18].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_18].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_19] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_19].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_19].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_20] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_20].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_20].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_21] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_21].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_21].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_22] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_22].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_22].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_23] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_23].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_23].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_24] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_24].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_24].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_25] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_25].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_25].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_26] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_26].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_26].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_27] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_27].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_27].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_28] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_28].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_28].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_29] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_29].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_29].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_30] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_30].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_30].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_31] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_31].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_31].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_32] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_32].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_32].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_33] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_33].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_33].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_34] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_34].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_34].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_35] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_35].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_35].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_36] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_36].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_36].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_37] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_37].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_37].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_38] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_38].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_38].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_39] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_39].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_39].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_40] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_40].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_40].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_41] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_41].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_41].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_42] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_42].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_42].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_43] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_43].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_43].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_44] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_44].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_44].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_45] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_45].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_45].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_46] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_46].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_46].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_47] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_47].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_47].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_48] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_48].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_48].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_49] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_49].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_49].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_50] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_50].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_50].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_51] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_51].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_51].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_52] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_52].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_52].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_53] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_53].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_53].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_54] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_54].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_54].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_55] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_55].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_55].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_56] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_56].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_56].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_57] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_57].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_57].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_58] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_58].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_58].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_59] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_59].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_59].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_60] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_60].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_60].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_61] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_61].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_61].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_62] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_62].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_62].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_63] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_63].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_63].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_64] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_64].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_64].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_65] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_65].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_65].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_66] == 'TRUE') {
					WebsiteJSON_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_66].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_66].toUpperCase() + '", '
					z++
				}
			}
		}
*/
		
		WebsiteJSON_print = WebsiteJSON_print.replace(", }", " }")

	
	
	WebsiteJSON_print += "}\n"
	
		}
		WebsiteJSON_print += "}\n"


	console.log(WebsiteJSON_print)
		fs.writeFile('./output/' + 'WebsiteJSON_print.json', WebsiteJSON_print, function (err) {
	if (err) throw err;
	});
	
};








function WebsiteJSON_NEW() {

	let WebsiteJSON_MonsterInfo_print = '{\n'
	let WebsiteJSON_ExtraInfo_print = '{\n'
	let WebsiteJSON_TM_Moves_print = '{\n'
	for (k = 0; k < base_stats.length; k++) {


//EDIT THE DATA FIRST
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = 'NONE';
	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = 0;
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = 0;
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = 0;
	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = 0;
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = 0;
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = 0;
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = 0;
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = 0;
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = 0;
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = 0;
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = 0;
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = 0;
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'NONE';
	if (stats[base_stats[k]][HELDITEM1] === '-') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '-') stats[base_stats[k]][HELDITEM2] = 'NONE';


	WebsiteJSON_MonsterInfo_print += "{" 
	WebsiteJSON_ExtraInfo_print += "{" 
	WebsiteJSON_TM_Moves_print += "{" 
	//WebsiteJSON_print += "\t\t\"" + stats[base_stats[k]][ID] + "\": {\n"

	//WebsiteJSON_print += "\t\t\t\"" + "MONSTER" + "\": {\n"
	WebsiteJSON_MonsterInfo_print += "\"" + "id" + "\":\"" + stats[base_stats[k]][ID] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "id" + "\":\"" + stats[base_stats[k]][ID] + "\","
	WebsiteJSON_TM_Moves_print += "\"" + "id" + "\":\"" + stats[base_stats[k]][ID] + "\","
	//WebsiteJSON_print += "\"" + "squadno" + "\": \"" + stats[base_stats[k]][ID] + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "name" + "\":\"" + stats[base_stats[k]][NAME].replace(/_/g, ' ') + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "imgsrc" + "\":\"img/player/" + stats[base_stats[k]][ID] + ".png\","
	//WebsiteJSON_print += "\t\t\t},\n"

	//WebsiteJSON_print += "\t\t\t\"" + "STATS" + "\": {\n"
	WebsiteJSON_MonsterInfo_print += "\"" + "type_1" + "\": \"" + stats[base_stats[k]][TYPE1] + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "type_2" + "\": \"" + stats[base_stats[k]][TYPE2] + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "ability_1" + "\": \"" + stats[base_stats[k]][ABILITY1] + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "ability_2" + "\": \"" + stats[base_stats[k]][ABILITY2] + "\","
	WebsiteJSON_MonsterInfo_print += "\"" + "stats_total" + "\": " + stats[base_stats[k]][TOTALSTATS] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "hp" + "\": " + stats[base_stats[k]][HP] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "attack" + "\": " + stats[base_stats[k]][ATTACK] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "defense" + "\": " + stats[base_stats[k]][DEFENSE] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "special_attack" + "\": " + stats[base_stats[k]][SPATT] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "special_defense" + "\": " + stats[base_stats[k]][SPDEF] + ","
	WebsiteJSON_MonsterInfo_print += "\"" + "speed" + "\": " + stats[base_stats[k]][SPEED] + ","
	//WebsiteJSON_print += "\t\t\t},\n"


	//WebsiteJSON_print += "\t\t\t\"" + "MOREINFO" + "\": {\n"
	WebsiteJSON_ExtraInfo_print += "\"" + "held_item_1" + "\": \"" + stats[base_stats[k]][HELDITEM1] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "held_item_2" + "\": \"" + stats[base_stats[k]][HELDITEM2] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "exp_yeild" + "\": \"" + stats[base_stats[k]][EXPYEILD] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "exp_growth" + "\": \"" + stats[base_stats[k]][EXPGROWTH].toUpperCase() + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "gender_ratio" + "\": \"" + stats[base_stats[k]][GENDERRATIO] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "catch_rate" + "\": \"" + stats[base_stats[k]][CATCHRATE] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "friendship" + "\": \"" + stats[base_stats[k]][FRIENDSHIP] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "egg_cycles" + "\": \"" + stats[base_stats[k]][EGGCYCLES] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "egg_group_1" + "\": \"" + stats[base_stats[k]][EGGGROUP1].toUpperCase() + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "egg_group_2" + "\": \"" + stats[base_stats[k]][EGGGROUP2].toUpperCase() + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "flee_rate" + "\": \"" + stats[base_stats[k]][FLEERATE] + "\","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_hp" + "\": " + stats[base_stats[k]][EV_HP] + ","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_attack" + "\": " + stats[base_stats[k]][EV_ATTACK] + ","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_defense" + "\": " + stats[base_stats[k]][EV_DEFENSE] + ","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_special_attack" + "\": " + stats[base_stats[k]][EV_SPATT] + ","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_special_defense" + "\": " + stats[base_stats[k]][EV_SPDEF] + ","
	WebsiteJSON_ExtraInfo_print += "\"" + "EV_speed" + "\": " + stats[base_stats[k]][EV_SPEED] + ","
	//WebsiteJSON_print += "\t\t\t},\n"

	for (j = 0; j < pokedexData.length; j++) {
		if (DexEntries[pokedexData[j]][ID_DEX] === stats[base_stats[k]][ID]) {
			//WebsiteJSON_print += "\t\t\t\t\tDATA FOUND " + "STATS ID: " + stats[base_stats[k]][ID] + " DEX ID " + DexEntries[pokedexData[j]][ID_DEX] + "\n"
			if (DexEntries[pokedexData[j]][HEIGHT_DEX] === "") DexEntries[pokedexData[j]][HEIGHT_DEX] = 0;
			if (DexEntries[pokedexData[j]][WEIGHT_DEX] === "") DexEntries[pokedexData[j]][WEIGHT_DEX] = 0;

			//WebsiteJSON_print += "\t\t\t\"" + "DEX" + "\": {\n"
			WebsiteJSON_ExtraInfo_print += "\"" + "pokedex_number" + "\": \"" + DexEntries[pokedexData[j]][POKEDEX_NUMBER_DEX] + "\","
			WebsiteJSON_ExtraInfo_print += "\"" + "dex_entry" + "\": \"" + DexEntries[pokedexData[j]][DEXENTRIES_DEX] + "\","
			WebsiteJSON_ExtraInfo_print += "\"" + "height" + "\": " + DexEntries[pokedexData[j]][HEIGHT_DEX] + ","
			WebsiteJSON_ExtraInfo_print += "\"" + "weight" + "\": " + DexEntries[pokedexData[j]][WEIGHT_DEX] + ","
			WebsiteJSON_ExtraInfo_print += "\"" + "category" + "\": \"" + DexEntries[pokedexData[j]][CATEGORY_DEX] + "\","
			//WebsiteJSON_print += "\t\t\t}\n"
			//WebsiteJSON_print += "\t\t}\n"	
		}
	}

	//Insert TMs here
	//PokeScape_TM
	TM_ID_NUMBER = 0;
	TM_MONSTER_NAME = 1;
	TM_01 = 2;
	TM_02 = 3;
	TM_03 = 4;
	TM_04 = 5;
	TM_05 = 6;
	TM_06 = 7;
	TM_07 = 8;
	TM_08 = 9;
	TM_09 = 10;
	TM_10 = 11;
	TM_11 =	12;
	TM_12 =	13;
	TM_13 =	14;
	TM_14 =	15;
	TM_15 =	16;
	TM_16 =	17;
	TM_17 =	18;
	TM_18 =	19;
	TM_19 =	20;
	TM_20 =	21;
	TM_21 =	22;
	TM_22 =	23;
	TM_23 =	24;
	TM_24 =	25;
	TM_25 =	26;
	TM_26 =	27;
	TM_27 =	28;
	TM_28 =	29;
	TM_29 =	30;
	TM_30 =	31;
	TM_31 =	32;
	TM_32 =	33;
	TM_33 =	34;
	TM_34 =	35;
	TM_35 =	36;
	TM_36 =	37;
	TM_37 =	38;
	TM_38 =	39;
	TM_39 =	40;
	TM_40 =	41;
	TM_41 =	42;
	TM_42 =	43;
	TM_43 =	44;
	TM_44 =	45;
	TM_45 =	46;
	TM_46 =	47;
	TM_47 =	48;
	TM_48 =	49;
	TM_49 =	50;
	TM_50 =	51;
	TM_51 =	52;
	TM_52 =	53;
	TM_53 =	54;
	TM_54 =	55;
	TM_55 =	56;
	TM_56 =	57;
	TM_57 =	58;
	TM_58 =	59;
	TM_59 =	60;
	TM_60 =	61;
	TM_61 =	62;
	TM_62 =	63;
	TM_63 =	64;
	TM_64 =	65;
	TM_65 =	66;
	TM_66 =	67;
	TM_67 =	68;
	TM_68 =	69;
	TM_69 =	70;
	TM_70 =	71;
	TM_71 =	72;
	TM_72 =	73;
	TM_73 =	74;
	TM_74 =	75;

		for (j = 0; j < (1106 + 1); j++) { //[(1106 + 1)  / pokedexData.length]   //can also change the number to pokedexData.length (IT MUST BE THE SPECIFIC NUMBER + 1)
		if (PokeScapeTMs[TM_List[j]][TM_ID_NUMBER] === stats[base_stats[k]][ID]) {
		z = 0;
	
				if (PokeScapeTMs[TM_List[j]][TM_01] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_01].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_01].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_02] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_02].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_02].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_03] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_03].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_03].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_04] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_04].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_04].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_05] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_05].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_05].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_06] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_06].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_06].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_07] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_07].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_07].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_08] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_08].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_08].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_09] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_09].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_09].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_10] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_10].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_10].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_11] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_11].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_11].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_12] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_12].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_12].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_13] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_13].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_13].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_14] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_14].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_14].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_15] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_15].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_15].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_16] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_16].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_16].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_17] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_17].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_17].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_18] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_18].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_18].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_19] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_19].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_19].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_20] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_20].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_20].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_21] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_21].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_21].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_22] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_22].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_22].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_23] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_23].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_23].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_24] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_24].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_24].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_25] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_25].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_25].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_26] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_26].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_26].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_27] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_27].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_27].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_28] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_28].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_28].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_29] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_29].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_29].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_30] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_30].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_30].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_31] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_31].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_31].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_32] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_32].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_32].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_33] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_33].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_33].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_34] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_34].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_34].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_35] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_35].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_35].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_36] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_36].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_36].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_37] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_37].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_37].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_38] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_38].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_38].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_39] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_39].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_39].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_40] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_40].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_40].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_41] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_41].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_41].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_42] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_42].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_42].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_43] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_43].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_43].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_44] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_44].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_44].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_45] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_45].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_45].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_46] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_46].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_46].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_47] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_47].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_47].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_48] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_48].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_48].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_49] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_49].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_49].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_50] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_50].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_50].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_51] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_51].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_51].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_52] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_52].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_52].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_53] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_53].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_53].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_54] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_54].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_54].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_55] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_55].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_55].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_56] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_56].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_56].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_57] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_57].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_57].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_58] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_58].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_58].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_59] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_59].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_59].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_60] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_60].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_60].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_61] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_61].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_61].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_62] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_62].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_62].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_63] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_63].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_63].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_64] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_64].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_64].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_65] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_65].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_65].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_66] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_66].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_66].toUpperCase() + '", '
					z++
				}

				if (PokeScapeTMs[TM_List[j]][TM_67] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_67].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_67].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_68] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_68].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_68].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_69] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_69].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_69].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_70] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_70].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_70].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_71] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_71].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_71].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_72] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_72].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_72].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_73] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_73].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_73].toUpperCase() + '", '
					z++
				}
				if (PokeScapeTMs[TM_List[j]][TM_74] == 'TRUE') {
					WebsiteJSON_TM_Moves_print += ' "TM_Number_Data_' + z + '": "' + PokeScapeTMs[TM_List[0]][TM_74].toUpperCase() + '", "TM_Name_Data_' + z + '": "'+ PokeScapeTMs[TM_List[1]][TM_74].toUpperCase() + '", '
					z++
				}
			}
		}




























	WebsiteJSON_MonsterInfo_print = WebsiteJSON_MonsterInfo_print.replace(", }", " }")
	WebsiteJSON_ExtraInfo_print = WebsiteJSON_ExtraInfo_print.replace(", }", " }")
	WebsiteJSON_TM_Moves_print = WebsiteJSON_TM_Moves_print.replace(", }", " }")
	WebsiteJSON_MonsterInfo_print = WebsiteJSON_MonsterInfo_print.replace(",}", "}")
	WebsiteJSON_ExtraInfo_print = WebsiteJSON_ExtraInfo_print.replace(",}", "}")

	
	
	WebsiteJSON_MonsterInfo_print += "}\n"
	WebsiteJSON_ExtraInfo_print += "}\n"
	WebsiteJSON_TM_Moves_print += "}\n"
	
		}
		WebsiteJSON_MonsterInfo_print += "}\n"
		WebsiteJSON_ExtraInfo_print += "}\n"
		WebsiteJSON_TM_Moves_print += "}\n"


	console.log(WebsiteJSON_MonsterInfo_print)
		fs.writeFile('./output/' + 'WebsiteJSON_MonsterInfo_print.json', WebsiteJSON_MonsterInfo_print, function (err) {
	if (err) throw err;
	});
	console.log(WebsiteJSON_ExtraInfo_print)
		fs.writeFile('./output/' + 'WebsiteJSON_ExtraInfo_print.json', WebsiteJSON_ExtraInfo_print, function (err) {
	if (err) throw err;
	});
	console.log(WebsiteJSON_TM_Moves_print)
		fs.writeFile('./output/' + 'WebsiteJSON_TM_Moves_print.json', WebsiteJSON_TM_Moves_print, function (err) {
	if (err) throw err;
	});
	
};











































































//if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = '0';






/*
{
  "by-id": {
    "#ID": {
      "MONSTER": {
        "name": "",
        "image/path": ""
      },
      "STATS": {
        "type 1": "",
        "type 2": "",
        "ability 1": "",
        "ability 2": "",
        "stats total": 0,
        "hp": 0,
        "attack": 0,
        "defense": 0,
        "special attack": 0,
        "special defense": 0,
        "speed": 0
      },
      "MOREINFO": {
        "held item 1": "",
        "held item 2": "",
        "exp yield": "",
        "exp growth": "",
        "gender ratio": "",
        "catch rate": "",
        "friendship": "",
        "egg cycles": "",
        "egg group 1": "",
        "egg group 2": "",
        "flee rate": "",
        "EV hp": 0,
        "EV attack": 0,
        "EV defense": 0,
        "EV special attack": 0,
        "EV special defense": 0,
        "EV speed": 0
      },
      "DEX": {
        "pokedex number": "",
        "dex entry": 0,
        "height": 0,
        "weight": 0,
        "category": ""
      },
      "MOVES": {
        "0": {
          "level": "",
          "move": ""
        },
        "1": {
          "level": "",
          "move": ""
        },
        "2": {
          "level": "",
          "move": ""
        }
      },
      "TM": {
        "0": {
          "TMnumber": "",
          "move": ""
        },
        "1": {
          "TMnumber": "",
          "move": ""
        },
        "2": {
          "TMnumber": "",
          "move": ""
        }
      }
    }
  }
}*/




//#region LevelUp_Movesets
function MOVEStest() {

	let MOVEStest_print = ''
	MOVEStest_print += "{\n"
	for (k = 0; k < PSMoves.length; k++) {
		if (PokeScapeMOVES[PSMoves[k]][LEVEL_MOVE] === "") {
			MoveNumber = 0
			//MOVEStest_print += "\n\n"
			MOVEStest_print += "}\n{\"id\": \"" + PokeScapeMOVES[PSMoves[k]][ID_MOVE] + "\","
			//MOVEStest_print += "\"NAME\": \"" + PokeScapeMOVES[PSMoves[k]][NAME_MOVE] + "\""
		}
		
		if (PokeScapeMOVES[PSMoves[k]][NAME_MOVE] === "") {
			MOVEStest_print += ","
			MoveNumber = MoveNumber+1
			MOVEStest_print += "\"lvl" + MoveNumber + "\": \"" + PokeScapeMOVES[PSMoves[k]][LEVEL_MOVE].toUpperCase() + "\","
			MOVEStest_print += "\"mv" + MoveNumber + "\": \"" + PokeScapeMOVES[PSMoves[k]][MOVENAME_MOVE] + "\""	
		}
		
	}
	MOVEStest_print += "\n\n\n\n\n"
	MOVEStest_print += "}"
	console.log(MOVEStest_print)
		fs.writeFile('./output/' + 'MOVEStest.json', MOVEStest_print, function (err) {
	if (err) throw err;
	});
};
//#endregion
/*
{"id":"1","squadno":"1","mvlvl1":"1","monmv1":"Tackle","mvlvl2":"5","monmv2":"Kick", ect... "mvlvl50":"89","monmv50":"Punch"}
*/


/*
//WEBSITE JSON
function WebsiteJSON() {



	let WebsiteJSON_print = '{\n'
	for (k = 0; k < base_stats.length; k++) {


//EDIT THE DATA FIRST
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = 'NONE';
	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = 0;
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = 0;
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = 0;
	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = 0;
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = 0;
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = 0;
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = 0;
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = 0;
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = 0;
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = 0;
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = 0;
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = 0;
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'NONE';


	WebsiteJSON_print += "\t\"by-id\": {\n" 
	//WebsiteJSON_print += "\t\t\"" + stats[base_stats[k]][ID] + "\": {\n"

	//WebsiteJSON_print += "\t\t\t\"" + "MONSTER" + "\": {\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "name" + "\": \"" + stats[base_stats[k]][NAME] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "image/path" + "\": \"path/" + stats[base_stats[k]][NAME] + "\",\n"
	//WebsiteJSON_print += "\t\t\t},\n"

	//WebsiteJSON_print += "\t\t\t\"" + "STATS" + "\": {\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "type 1" + "\": \"" + stats[base_stats[k]][TYPE1] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "type 2" + "\": \"" + stats[base_stats[k]][TYPE2] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "ability 1" + "\": \"" + stats[base_stats[k]][ABILITY1] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "ability 2" + "\": \"" + stats[base_stats[k]][ABILITY2] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "stats total" + "\": " + stats[base_stats[k]][TOTALSTATS] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "hp" + "\": " + stats[base_stats[k]][HP] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "attack" + "\": " + stats[base_stats[k]][ATTACK] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "defense" + "\": " + stats[base_stats[k]][DEFENSE] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "special attack" + "\": " + stats[base_stats[k]][SPATT] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "special defense" + "\": " + stats[base_stats[k]][SPDEF] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "speed" + "\": " + stats[base_stats[k]][SPEED] + ",\n"
	//WebsiteJSON_print += "\t\t\t},\n"


	//WebsiteJSON_print += "\t\t\t\"" + "MOREINFO" + "\": {\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "held item 1" + "\": \"" + stats[base_stats[k]][HELDITEM1] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "held item 2" + "\": \"" + stats[base_stats[k]][HELDITEM2] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "exp yeild" + "\": \"" + stats[base_stats[k]][EXPYEILD] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "exp growth" + "\": \"" + stats[base_stats[k]][EXPGROWTH].toUpperCase() + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "gender ratio" + "\": \"" + stats[base_stats[k]][GENDERRATIO] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "catch rate" + "\": \"" + stats[base_stats[k]][CATCHRATE] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "friendship" + "\": \"" + stats[base_stats[k]][FRIENDSHIP] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "egg cycles" + "\": \"" + stats[base_stats[k]][EGGCYCLES] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "egg group 1" + "\": \"" + stats[base_stats[k]][EGGGROUP1].toUpperCase() + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "egg group 2" + "\": \"" + stats[base_stats[k]][EGGGROUP2].toUpperCase() + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "flee rate" + "\": \"" + stats[base_stats[k]][FLEERATE] + "\",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV hp" + "\": " + stats[base_stats[k]][EV_HP] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV attack" + "\": " + stats[base_stats[k]][EV_ATTACK] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV defense" + "\": " + stats[base_stats[k]][EV_DEFENSE] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV special attack" + "\": " + stats[base_stats[k]][EV_SPATT] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV special defense" + "\": " + stats[base_stats[k]][EV_SPDEF] + ",\n"
	WebsiteJSON_print += "\t\t\t\t\"" + "EV speed" + "\": " + stats[base_stats[k]][EV_SPEED] + ",\n"
	//WebsiteJSON_print += "\t\t\t},\n"

	for (j = 0; j < pokedexData.length; j++) {
		if (DexEntries[pokedexData[j]][ID_DEX] === stats[base_stats[k]][ID]) {
			//WebsiteJSON_print += "\t\t\t\t\tDATA FOUND " + "STATS ID: " + stats[base_stats[k]][ID] + " DEX ID " + DexEntries[pokedexData[j]][ID_DEX] + "\n"
			if (DexEntries[pokedexData[j]][HEIGHT_DEX] === "") DexEntries[pokedexData[j]][HEIGHT_DEX] = 0;
			if (DexEntries[pokedexData[j]][WEIGHT_DEX] === "") DexEntries[pokedexData[j]][WEIGHT_DEX] = 0;

			//WebsiteJSON_print += "\t\t\t\"" + "DEX" + "\": {\n"
			WebsiteJSON_print += "\t\t\t\t\"" + "pokedex number" + "\": \"" + DexEntries[pokedexData[j]][POKEDEX_NUMBER_DEX] + "\",\n"
			WebsiteJSON_print += "\t\t\t\t\"" + "dex entry" + "\": \"" + DexEntries[pokedexData[j]][DEXENTRIES_DEX] + "\",\n"
			WebsiteJSON_print += "\t\t\t\t\"" + "height" + "\": " + DexEntries[pokedexData[j]][HEIGHT_DEX] + ",\n"
			WebsiteJSON_print += "\t\t\t\t\"" + "weight" + "\": " + DexEntries[pokedexData[j]][WEIGHT_DEX] + ",\n"
			WebsiteJSON_print += "\t\t\t\t\"" + "category" + "\": \"" + DexEntries[pokedexData[j]][CATEGORY_DEX] + "\"\n"
			//WebsiteJSON_print += "\t\t\t}\n"
			//WebsiteJSON_print += "\t\t}\n"
			
		}
	}




	
	
	WebsiteJSON_print += "\t},\n"
	
		}
		WebsiteJSON_print += "}\n"


	console.log(WebsiteJSON_print)
		fs.writeFile('./output/' + 'WebsiteJSON_print.json', WebsiteJSON_print, function (err) {
	if (err) throw err;
	});
	
};
*/









function EXPANSION_ConvertTMList() {
	//PokeScape_TM
	TM_ID_NUMBER = 0;
	TM_MONSTER_NAME = 1;
	TM_01 = 2;
	TM_02 = 3;
	TM_03 = 4;
	TM_04 = 5;
	TM_05 = 6;
	TM_06 = 7;
	TM_07 = 8;
	TM_08 = 9;
	TM_09 = 10;
	TM_10 = 11;
	TM_11 =	12;
	TM_12 =	13;
	TM_13 =	14;
	TM_14 =	15;
	TM_15 =	16;
	TM_16 =	17;
	TM_17 =	18;
	TM_18 =	19;
	TM_19 =	20;
	TM_20 =	21;
	TM_21 =	22;
	TM_22 =	23;
	TM_23 =	24;
	TM_24 =	25;
	TM_25 =	26;
	TM_26 =	27;
	TM_27 =	28;
	TM_28 =	29;
	TM_29 =	30;
	TM_30 =	31;
	TM_31 =	32;
	TM_32 =	33;
	TM_33 =	34;
	TM_34 =	35;
	TM_35 =	36;
	TM_36 =	37;
	TM_37 =	38;
	TM_38 =	39;
	TM_39 =	40;
	TM_40 =	41;
	TM_41 =	42;
	TM_42 =	43;
	TM_43 =	44;
	TM_44 =	45;
	TM_45 =	46;
	TM_46 =	47;
	TM_47 =	48;
	TM_48 =	49;
	TM_49 =	50;
	TM_50 =	51;
	TM_51 =	52;
	TM_52 =	53;
	TM_53 =	54;
	TM_54 =	55;
	TM_55 =	56;
	TM_56 =	57;
	TM_57 =	58;
	TM_58 =	59;
	TM_59 =	60;
	TM_60 =	61;
	TM_61 =	62;
	TM_62 =	63;
	TM_63 =	64;
	TM_64 =	65;
	TM_65 =	66;
	TM_66 =	67;

	let EXPANSION_TMListOutput_print = ''
	
	for (k = 0; k < TM_List.length; k++) { //LOOP THROUGH THE TM LIST.
		EXPANSION_TMListOutput_print += 'static const u16 s' + PokeScapeTMs[TM_List[k]][TM_MONSTER_NAME] + 'TeachableLearnset[] = {\n'
		
		if (PokeScapeTMs[TM_List[k]][TM_01] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_01].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_02] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_02].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_03] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_03].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_04] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_04].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_05] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_05].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_06] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_06].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_07] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_07].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_08] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_08].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_09] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_09].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_10] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_10].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_11] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_11].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_12] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_12].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_13] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_13].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_14] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_14].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_15] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_15].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_16] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_16].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_17] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_17].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_18] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_18].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_19] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_19].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_20] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_20].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_21] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_21].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_22] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_22].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_23] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_23].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_24] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_24].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_25] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_25].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_26] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_26].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_27] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_27].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_28] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_28].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_29] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_29].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_30] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_30].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_31] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_31].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_32] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_32].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_33] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_33].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_34] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_34].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_35] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_35].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_36] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_36].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_37] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_37].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_38] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_38].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_39] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_39].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_40] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_40].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_41] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_41].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_42] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_42].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_43] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_43].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_44] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_44].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_45] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_45].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_46] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_46].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_47] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_47].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_48] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_48].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_49] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_49].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_50] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_50].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_51] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_51].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_52] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_52].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_53] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_53].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_54] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_54].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_55] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_55].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_56] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_56].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_57] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_57].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_58] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_58].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_59] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_59].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_60] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_60].toUpperCase() + ',\n'
		}

		if (PokeScapeTMs[TM_List[k]][TM_61] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_61].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_62] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_62].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_63] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_63].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_64] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_64].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_65] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_65].toUpperCase() + ',\n'
		}
		if (PokeScapeTMs[TM_List[k]][TM_66] == 'TRUE') {
			EXPANSION_TMListOutput_print += '\tMOVE_' + PokeScapeTMs[TM_List[1]][TM_66].toUpperCase() + ',\n'
		}
		EXPANSION_TMListOutput_print += '\tMOVE_UNAVAILABLE,\n};\n'
	}
		
	console.log(EXPANSION_TMListOutput_print)
			fs.writeFile('./output/' + 'EXPANSION_TMListOutput.json', EXPANSION_TMListOutput_print, function (err) {
		if (err) throw err;
		});
}
/*

static const u16 sZygomite_Arcspore_FormTeachableLearnset[] = {
    MOVE_SUNNY_DAY,
    MOVE_RAIN_DANCE,
    MOVE_GRASSY_TERRAIN,
    MOVE_PSYCHIC_TERRAIN,
    MOVE_MISTY_TERRAIN,
    MOVE_ENERGY_BALL,
    MOVE_DRAINING_KISS,
    MOVE_TOXIC,
    MOVE_BANEFUL_BUNKER,
    MOVE_DRAGON_BREATH,
    MOVE_LEECH_LIFE,
    MOVE_SLACK_OFF,
    MOVE_THOUSAND_ARROWS,
    MOVE_ROCK_TOMB,
    MOVE_REVELATION_DANCE,
    MOVE_POLLEN_PUFF,
    MOVE_PLAY_ROUGH,
    MOVE_LUNAR_DANCE,
    MOVE_POISON_JAB,
    MOVE_POWDER,
    MOVE_MUD_BOMB,
    MOVE_HEX,
    MOVE_PSYSHOCK,
    MOVE_BULK_UP,
    MOVE_UNAVAILABLE,
};

*/



function ConvertTMList() {
	
	//PokeScape_TM
	TM_ID_NUMBER = 0;
	TM_MONSTER_NAME = 1;
	TM_01 = 2;
	TM_02 = 3;
	TM_03 = 4;
	TM_04 = 5;
	TM_05 = 6;
	TM_06 = 7;
	TM_07 = 8;
	TM_08 = 9;
	TM_09 = 10;
	TM_10 = 11;
	TM_11 =	12;
	TM_12 =	13;
	TM_13 =	14;
	TM_14 =	15;
	TM_15 =	16;
	TM_16 =	17;
	TM_17 =	18;
	TM_18 =	19;
	TM_19 =	20;
	TM_20 =	21;
	TM_21 =	22;
	TM_22 =	23;
	TM_23 =	24;
	TM_24 =	25;
	TM_25 =	26;
	TM_26 =	27;
	TM_27 =	28;
	TM_28 =	29;
	TM_29 =	30;
	TM_30 =	31;
	TM_31 =	32;
	TM_32 =	33;
	TM_33 =	34;
	TM_34 =	35;
	TM_35 =	36;
	TM_36 =	37;
	TM_37 =	38;
	TM_38 =	39;
	TM_39 =	40;
	TM_40 =	41;
	TM_41 =	42;
	TM_42 =	43;
	TM_43 =	44;
	TM_44 =	45;
	TM_45 =	46;
	TM_46 =	47;
	TM_47 =	48;
	TM_48 =	49;
	TM_49 =	50;
	TM_50 =	51;
	TM_51 =	52;
	TM_52 =	53;
	TM_53 =	54;
	TM_54 =	55;
	TM_55 =	56;
	TM_56 =	57;
	TM_57 =	58;
	TM_58 =	59;
	TM_59 =	60;
	TM_60 =	61;
	TM_61 =	62;
	TM_62 =	63;
	TM_63 =	64;
	TM_64 =	65;
	TM_65 =	66;
	TM_66 =	67;


	
	
		let TMListOutput_print = ''
	
		for (k = 0; k < TM_List.length; k++) { //LOOP THROUGH THE TM LIST.
			TMListOutput_print += '\t[SPECIES_' + PokeScapeTMs[TM_List[k]][TM_MONSTER_NAME].toUpperCase() + ']\t\t= TMHM_LEARNSET(\n'
				
			
				if (PokeScapeTMs[TM_List[k]][TM_01] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_01].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_01].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_02] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_02].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_02].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_03] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_03].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_03].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_04] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_04].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_04].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_05] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_05].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_05].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_06] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_06].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_06].toUpperCase() + ')\n'
				}





				if (PokeScapeTMs[TM_List[k]][TM_07] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_07].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_07].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_08] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_08].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_08].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_09] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_09].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_09].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_10] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_10].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_10].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_11] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_11].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_11].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_12] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_12].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_12].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_13] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_13].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_13].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_14] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_14].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_14].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_15] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_15].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_15].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_16] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_16].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_16].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_17] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_17].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_17].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_18] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_18].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_18].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_19] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_19].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_19].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_20] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_20].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_20].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_21] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_21].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_21].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_22] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_22].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_22].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_23] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_23].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_23].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_24] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_24].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_24].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_25] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_25].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_25].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_26] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_26].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_26].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_27] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_27].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_27].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_28] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_28].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_28].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_29] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_29].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_29].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_30] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_30].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_30].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_31] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_31].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_31].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_32] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_32].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_32].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_33] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_33].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_33].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_34] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_34].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_34].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_35] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_35].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_35].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_36] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_36].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_36].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_37] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_37].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_37].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_38] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_38].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_38].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_39] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_39].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_39].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_40] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_40].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_40].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_41] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_41].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_41].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_42] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_42].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_42].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_43] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_43].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_43].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_44] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_44].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_44].toUpperCase() + ')\n'
				}
				


				if (PokeScapeTMs[TM_List[k]][TM_45] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_45].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_45].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_46] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_46].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_46].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_47] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_47].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_47].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_48] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_48].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_48].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_49] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_49].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_49].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_50] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_50].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_50].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_51] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_51].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_51].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_52] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_52].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_52].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_53] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_53].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_53].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_54] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_54].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_54].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_55] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_55].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_55].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_56] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_56].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_56].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_57] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_57].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_57].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_58] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_58].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_58].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_59] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_59].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_59].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_60] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_60].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_60].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_61] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_61].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_61].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_62] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_62].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_62].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_63] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_63].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_63].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_64] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_64].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_64].toUpperCase() + ')\n'
				}
				/*if (PokeScapeTMs[TM_List[k]][TM_65] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_65].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_65].toUpperCase() + ')\n'
				}
				if (PokeScapeTMs[TM_List[k]][TM_66] == 'TRUE') {
					TMListOutput_print += '\t\t\t\t\t\t\t\t\t| TMHM(' + '' + PokeScapeTMs[TM_List[0]][TM_66].toUpperCase() + "_" + PokeScapeTMs[TM_List[1]][TM_66].toUpperCase() + ')\n'
				}*/
			
				
							
							
				TMListOutput_print += '\t\t\t\t\t\t\t\t\t),\n'
				TMListOutput_print = TMListOutput_print.replace("TMHM_LEARNSET(\n\t\t\t\t\t\t\t\t\t|", "TMHM_LEARNSET(\n\t\t\t\t\t\t\t\t\t")
		}
		

		
		

	
	
		console.log(TMListOutput_print)
			fs.writeFile('./output/' + 'TMListOutput_print.json', TMListOutput_print, function (err) {
		if (err) throw err;
		});
		
	};

	//.replace(/ /g, '_')

	//if (TM_List[PokeScapeTMs[k]][0] === 'FALSE') {
		//if (PokeScapeTMs[TM_List[k]][TM_02] !== 'TRUE') {

		























//WEBSITE JSON
function UnityJSON() {



	let UnityJSON_print = "{\n\t" + "'Monsters':\n\t[\n" 
	for (k = 0; k < base_stats.length; k++) {


//EDIT THE DATA FIRST
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = 'NONE';
	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = 0;
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = 0;
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = 0;
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = 0;

	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = 0;
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = 0;
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = 0;
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = 0;
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = 0;
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = 0;
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = 0;
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = 0;
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'NONE';


	UnityJSON_print += "\t\t{" 

	UnityJSON_print += "\"" + "monsterID" + "\":\"" + stats[base_stats[k]][ID] + "\","
	UnityJSON_print += "\"" + "monsterName" + "\":\"" + stats[base_stats[k]][NAME].replace(/_/g, ' ') + "\","
	UnityJSON_print += "\"" + "type1" + "\": \"" + stats[base_stats[k]][TYPE1] + "\","
	UnityJSON_print += "\"" + "type2" + "\": \"" + stats[base_stats[k]][TYPE2] + "\","
	//skill
	//evolutions
	UnityJSON_print += "\"" + "hp" + "\": " + stats[base_stats[k]][HP] + ","
	UnityJSON_print += "\"" + "attack" + "\": " + stats[base_stats[k]][ATTACK] + ","
	UnityJSON_print += "\"" + "defense" + "\": " + stats[base_stats[k]][DEFENSE] + ","
	UnityJSON_print += "\"" + "speed" + "\": " + stats[base_stats[k]][SPEED] + ","
	//image
	//UnityJSON_print += "\"" + "imgsrc" + "\":\"img/player/" + stats[base_stats[k]][ID] + ".png\","






	
	
	UnityJSON_print += "}\n"
	UnityJSON_print = UnityJSON_print.replace(",}", "},")
	
	}
		UnityJSON_print += "\t]\n}\n"
		


	console.log(UnityJSON_print)
		fs.writeFile('./output/' + 'UnityJSON_print.json', UnityJSON_print, function (err) {
	if (err) throw err;
	});
	
};



















function ConvertTrainers() {
	
let PokeScapeTrainerDetails = fs.readFileSync('./test/' + './trainers.txt').toString();
//console.log(contents);
//const PokeScapeTrainerDetails = require('./test/' + './test.txt')
//const TrainerDetials_List = Object.keys(PokeScapeTrainerDetails);

	let TrainersJSON_print = "Hello World. Time to Convert this to JSON\n" 

	

	TrainersJSON_print += "{\n"

	TrainersJSON_print += PokeScapeTrainerDetails

	TrainersJSON_print = TrainersJSON_print.replaceAll('const struct Trainer gTrainers[] = {', '')
	.replaceAll(' ', '') 
	.replaceAll('[TRAINER_', '{\n\t"TRAINER": "').replaceAll(']=\n{', '",').replaceAll(']=\n\t{', '",')
	.replaceAll('.partyFlags', '\t"partyFlags": "')
	.replaceAll('.trainerClass=', '\t"trainerClass": "')
	.replaceAll('.encounterMusic_gender=', '\t"encounterMusic_gender": "')
	.replaceAll('.trainerPic=', '\t"trainerPic": "')
	.replaceAll('.trainerName=', '\t"trainerName": ')
	.replaceAll('.items=', '\t"items": "')
	.replaceAll('.doubleBattle=', '\t"doubleBattle": "')
	.replaceAll('.aiFlags=', '\t"aiFlags": "')
	.replaceAll('.partySize=', '\t"partySize": "')
	.replaceAll('.party=', '\t"party": "')
	.replaceAll('.scaling=', '\t"scaling": "')


	.replaceAll('_(', '') 
	.replaceAll('),', '') 
	.replaceAll('ARRAY_COUNT(', '') 
	.replaceAll('=', '') 
	
	
	.replaceAll(',\n\t"encounterMusic', '",\n\t"encounterMusic') 
	.replaceAll(',\n\t"trainerPic', '",\n\t"trainerPic') 
	.replaceAll(',\n\t"trainerName', '",\n\t"trainerName') 
	.replaceAll(',\n\t"aiFlags', '",\n\t"aiFlags') 
	.replaceAll(',\n\t"partySize', '",\n\t"partySize')
	.replaceAll(',\n\t"scaling', '",\n\t"scaling') 
	.replaceAll(',\n\t"doubleBattle', '",\n\t"doubleBattle') 
	.replaceAll('\n\t"items', ',\n\t"items') 
	.replaceAll('\n\t"party"', '",\n\t"party"') 
	.replaceAll(',\n\t"trainerClass"', '",\n\t"trainerClass"') 

	
	.replaceAll(',\n},', '"\n},') 
	

	

	
	
	.replaceAll("/,/g", "\n")

	

	//TrainersJSON_print += "}\n"

	

	



	console.log(TrainersJSON_print)
		fs.writeFile('./output/' + 'Trainers.json', TrainersJSON_print, function (err) {
	if (err) throw err;
	});
}














function EXPANSION_frontpicAnims() {

	let EXPANSION_frontpicAnims_PRINT = '';
	for (k = 0; k < base_stats.length; k++) {
		EXPANSION_frontpicAnims_PRINT += 'static const union AnimCmd *const sAnims_' + stats[base_stats[k]][NAME] + '[] ={\n'
		EXPANSION_frontpicAnims_PRINT += '\tsAnim_GeneralFrame0,\n' + '\tsAnim_' + stats[base_stats[k]][NAME] + '_1,\n' + '};\n\n'
	}
	EXPANSION_frontpicAnims_PRINT += '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
	for (k = 0; k < base_stats.length; k++) {
		EXPANSION_frontpicAnims_PRINT += 'static const union AnimCmd sAnim_' + stats[base_stats[k]][NAME] + '_1[] =\n{\n'
		EXPANSION_frontpicAnims_PRINT += '\tANIMCMD_FRAME(1, 40),\n\tANIMCMD_FRAME(0, 5),\n\tANIMCMD_END,\n};'
	}
	console.log(EXPANSION_frontpicAnims_PRINT)
	fs.writeFile('./output/' + 'expansion_frontpicanims.txt', EXPANSION_frontpicAnims_PRINT, function (err) {
  if (err) throw err;
});
}
function EXPANSION_learnset_pointers() {
	let EXPANSION_learnset_pointers_PRINT = '';
	for (k = 0; k < base_stats.length; k++) {
		EXPANSION_learnset_pointers_PRINT += '[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase() + '] = s' + stats[base_stats[k]][NAME] + 'LevelUpLearnset,\n'
	}

	console.log(EXPANSION_learnset_pointers_PRINT)
	fs.writeFile('./output/' + 'EXPANSION_learnset_pointers.txt', EXPANSION_learnset_pointers_PRINT, function (err) {
  if (err) throw err;
});
}



/*
static const union AnimCmd sAnim_Saraowl_1[] =
{
	ANIMCMD_FRAME(1, 40),
	ANIMCMD_FRAME(0, 5),
	ANIMCMD_END,
};
*/







//#region Base_Stats.c
function EXPANSION_BaseStats() {

	let base_stats_print = '';
	//base_stats_print += '#include "defines.h"\n#include "../include/abilities.h"\n#include "../include/items.h"\n#include "../include/base_stats.h"\n\n// Maximum value for a female Pokémon is 254 (MON_FEMALE) which is 100% female.\n// 255 (MON_GENDERLESS) is reserved for genderless Pokémon.\n#define PERCENT_FEMALE(percent) min(254, ((percent * 255) / 100))\n\nconst struct BaseStats gBaseStats[] = \n{\n	[SPECIES_NONE] = {0},\n\n'
	for (k = 0; k < base_stats.length; k++) {
	/* 	if (stats[base_stats[k]][2] === '') stats[base_stats[k]][2] = stats[base_stats[k]][0] */

//If data is empty fill with placeholder data
//TYPE
	if (stats[base_stats[k]][TYPE1] === "") stats[base_stats[k]][TYPE1] = 'NONE';
	if (stats[base_stats[k]][TYPE1] === "-") stats[base_stats[k]][TYPE1] = 'NONE';
//Stats
	if (stats[base_stats[k]][HP] === "") stats[base_stats[k]][HP] = '0';
	if (stats[base_stats[k]][ATTACK] === "") stats[base_stats[k]][ATTACK] = '0';
	if (stats[base_stats[k]][DEFENSE] === "") stats[base_stats[k]][DEFENSE] = '0';
	if (stats[base_stats[k]][SPATT] === "") stats[base_stats[k]][SPATT] = '0';
	if (stats[base_stats[k]][SPDEF] === "") stats[base_stats[k]][SPDEF] = '0';
	if (stats[base_stats[k]][SPEED] === "") stats[base_stats[k]][SPEED] = 'EMPTY';


	if (stats[base_stats[k]][EXPYEILD] === "") stats[base_stats[k]][EXPYEILD] = '0';
	if (stats[base_stats[k]][EXPGROWTH] === "") stats[base_stats[k]][EXPGROWTH] = 'MEDIUM_SLOW';
	if (stats[base_stats[k]][GENDERRATIO] === "") stats[base_stats[k]][GENDERRATIO] = 'MON_GENDERLESS';
	if (stats[base_stats[k]][CATCHRATE] === "") stats[base_stats[k]][CATCHRATE] = '0';
	if (stats[base_stats[k]][FRIENDSHIP] === "") stats[base_stats[k]][FRIENDSHIP] = '0';
	if (stats[base_stats[k]][EGGCYCLES] === "") stats[base_stats[k]][EGGCYCLES] = '0';

	if (stats[base_stats[k]][EGGGROUP1] === "") stats[base_stats[k]][EGGGROUP1] = 'NONE';

	if (stats[base_stats[k]][FLEERATE] === "") stats[base_stats[k]][FLEERATE] = '0';
//If TYPE2 is empty, then use TYPE1.
	if (stats[base_stats[k]][TYPE2] === '') stats[base_stats[k]][TYPE2] = stats[base_stats[k]][TYPE1]
	if (stats[base_stats[k]][TYPE2] === '-') stats[base_stats[k]][TYPE2] = stats[base_stats[k]][TYPE1]


//SPECIES NAME
	base_stats_print += '\n\n[SPECIES_' + stats[base_stats[k]][NAME].toUpperCase().replace(/ /g, '_')/* .replace(/_/g, '') *//* .replace(/-/g, '') */.replace('.', '') 
//STATS
	base_stats_print += '] =\n\t{\n\t\t.baseHP = ' + stats[base_stats[k]][HP] + ',\n\t\t.baseAttack = ' + stats[base_stats[k]][ATTACK] + ',\n\t\t.baseDefense = ' + stats[base_stats[k]][DEFENSE] + ',\n\t\t.baseSpeed = ' + stats[base_stats[k]][SPEED] + ',\n\t\t.baseSpAttack = ' + stats[base_stats[k]][SPATT] + ',\n\t\t.baseSpDefense = ' + stats[base_stats[k]][SPDEF]
//TYPES
	base_stats_print += ',\n\t\t.types = { TYPE_' + stats[base_stats[k]][TYPE1].toUpperCase() + ', TYPE_' + stats[base_stats[k]][TYPE2].toUpperCase() + ' }'

//CATCH RATE
	base_stats_print += ',\n\t\t.catchRate = ' + stats[base_stats[k]][CATCHRATE] 
//EXP YEILD	
	base_stats_print += ',\n\t\t.expYield = ' + stats[base_stats[k]][EXPYEILD]
//EV YIELD
	if (stats[base_stats[k]][EV_HP] === "") stats[base_stats[k]][EV_HP] = '0';
	base_stats_print += ',\n\t\t.evYield_HP = ' + stats[base_stats[k]][EV_HP]
	if (stats[base_stats[k]][EV_ATTACK] === "") stats[base_stats[k]][EV_ATTACK] = '0';
	base_stats_print += ',\n\t\t.evYield_Attack = ' + stats[base_stats[k]][EV_ATTACK]
	if (stats[base_stats[k]][EV_DEFENSE] === "") stats[base_stats[k]][EV_DEFENSE] = '0';
	base_stats_print += ',\n\t\t.evYield_Defense = ' + stats[base_stats[k]][EV_DEFENSE]
	if (stats[base_stats[k]][EV_SPATT] === "") stats[base_stats[k]][EV_SPATT] = '0';
	base_stats_print += ',\n\t\t.evYield_SpAttack = ' + stats[base_stats[k]][EV_SPATT]
	if (stats[base_stats[k]][EV_SPDEF] === "") stats[base_stats[k]][EV_SPDEF] = '0';
	base_stats_print += ',\n\t\t.evYield_SpDefense = ' + stats[base_stats[k]][EV_SPDEF]
	if (stats[base_stats[k]][EV_SPEED] === "") stats[base_stats[k]][EV_SPEED] = '0';
	base_stats_print += ',\n\t\t.evYield_Speed = ' + stats[base_stats[k]][EV_SPEED]
//GENDER
	if (stats[base_stats[k]][GENDERRATIO] === 'Genderless') stats[base_stats[k]][GENDERRATIO] = 'MON_GENDERLESS'
	if (stats[base_stats[k]][GENDERRATIO] === '0') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(0)"
	if (stats[base_stats[k]][GENDERRATIO] === '12.5') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(12.5)"
	if (stats[base_stats[k]][GENDERRATIO] === '40') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(40)"
	if (stats[base_stats[k]][GENDERRATIO] === '50') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(50)"
	if (stats[base_stats[k]][GENDERRATIO] === '75') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(75)"
	if (stats[base_stats[k]][GENDERRATIO] === '100') stats[base_stats[k]][GENDERRATIO] = "PERCENT_FEMALE(100)"
	base_stats_print += ',\n\t\t.genderRatio = ' + stats[base_stats[k]][GENDERRATIO]
//EGG CYCLES
	base_stats_print += ',\n\t\t.eggCycles = ' + stats[base_stats[k]][EGGCYCLES] 
//FRIENDSHIP 
	base_stats_print += ',\n\t\t.friendship = ' + stats[base_stats[k]][FRIENDSHIP]
//GROWTH RATE
	base_stats_print += ',\n\t\t.growthRate = GROWTH_' + stats[base_stats[k]][EXPGROWTH].toUpperCase().replace(/ /g, '_')
//HELD ITEMS	
	if (stats[base_stats[k]][HELDITEM1] === '') stats[base_stats[k]][HELDITEM1] = 'ITEM_NONE';
	if (stats[base_stats[k]][HELDITEM2] === '') stats[base_stats[k]][HELDITEM2] = 'ITEM_NONE';
	if (stats[base_stats[k]][HELDITEM1] === '-') stats[base_stats[k]][HELDITEM1] = 'ITEM_NONE';
	if (stats[base_stats[k]][HELDITEM2] === '-') stats[base_stats[k]][HELDITEM2] = 'ITEM_NONE';
	base_stats_print += ',\n\t\t.itemCommon = ' + stats[base_stats[k]][HELDITEM1].toUpperCase() + ',\n\t\t.itemRare = ' + stats[base_stats[k]][HELDITEM2].toUpperCase() 
//EGG GROUP
if (stats[base_stats[k]][EGGGROUP2] === '') stats[base_stats[k]][EGGGROUP2] = stats[base_stats[k]][EGGGROUP1];
if (stats[base_stats[k]][EGGGROUP1] === 'UNDISCOVERED') stats[base_stats[k]][EGGGROUP1] = "NO_EGGS_DISCOVERED"
if (stats[base_stats[k]][EGGGROUP2] === 'UNDISCOVERED') stats[base_stats[k]][EGGGROUP2] = "NO_EGGS_DISCOVERED"

base_stats_print += ',\n\t\t.eggGroups = { EGG_GROUP_' + stats[base_stats[k]][EGGGROUP1].toUpperCase().replace(/ /g, '') + ', EGG_GROUP_' + stats[base_stats[k]][EGGGROUP2].toUpperCase().replace(/ /g, '') + " },"
//ABILITIES
	if (stats[base_stats[k]][ABILITY1] === '') stats[base_stats[k]][ABILITY1] = 'NONE';
	if (stats[base_stats[k]][ABILITY2] === '') stats[base_stats[k]][ABILITY2] = 'NONE';
	if (stats[base_stats[k]][ABILITY3] === '') stats[base_stats[k]][ABILITY3] = 'NONE';
	//base_stats_print += ',\n\t\t.ability1 = ABILITY_' + stats[base_stats[k]][ABILITY1].toUpperCase().replace(/ /g, '') + ',\n\t\t.ability2 = ABILITY_' + stats[base_stats[k]][ABILITY2].toUpperCase().replace(/ /g, '')
	base_stats_print += "\n\t\t.abilities = { " + "ABILITY_" + stats[base_stats[k]][ABILITY1].toUpperCase().replace(/ /g, '') + ", " + "ABILITY_" + stats[base_stats[k]][ABILITY2].toUpperCase().replace(/ /g, '') + ', ' + 'ABILITY_' + stats[base_stats[k]][ABILITY3].toUpperCase().replace(/ /g, '') + " },"
//BODY COLOR
	base_stats_print +='\n\t\t.bodyColor = BODY_COLOR_BLACK,'

//SPECIES NAME
	base_stats_print += '\n\t\t.speciesName = _("' + stats[base_stats[k]][INGAME_NAME] + '"),'
//CRY ID
	base_stats_print += '\n\t\t.cryId = ' + 'CRY_NONE,'//stats[base_stats[k]][NAME].toUpperCase().replace(/ /g, '_')/* .replace(/_/g, '') *//* .replace(/-/g, '') */.replace('.', '') + '"),'
//NATIONAL_DEX
	base_stats_print += '\n\t\t.natDexNum = NATIONAL_DEX_' + stats[base_stats[k]][NAME].toUpperCase().replace(/ /g, '_')/* .replace(/_/g, '') *//* .replace(/-/g, '') */.replace('.', '') + ','
//CATEGORY NAME
	base_stats_print += '\n\t\t.categoryName = _("' + DexEntries[pokedexData[k]][CATEGORY_DEX] + '"),'
//HEIGHT / WEIGHT
	if (DexEntries[pokedexData[k]][HEIGHT_DEX] === "") DexEntries[pokedexData[k]][HEIGHT_DEX] = '0';
	if (DexEntries[pokedexData[k]][WEIGHT_DEX] === "") DexEntries[pokedexData[k]][WEIGHT_DEX] = '0';
	base_stats_print += "\n\t\t.height = " + DexEntries[pokedexData[k]][HEIGHT_DEX] + ","
	base_stats_print += "\n\t\t.weight = " + DexEntries[pokedexData[k]][WEIGHT_DEX] + ","
//DESCRIPTION
	base_stats_print += '\n\t\t.description = COMPOUND_STRING(\n\t\t\t"' + wordwrap(DexEntries[pokedexData[k]][DEXENTRIES_DEX], 35) +'"),'
//SCALE
	base_stats_print += "\n\t\t.pokemonScale = " + "256 " + ","
	base_stats_print += "\n\t\t.pokemonOffset = " + "0 " + ","
	base_stats_print += "\n\t\t.trainerScale = " + "256 " + ","
	base_stats_print += "\n\t\t.trainerOffset = " + "0 " + ","
//FRONTPICS
	base_stats_print += "\n\t\tFRONT_PIC(" + stats[base_stats[k]][NAME] + ', 64, 64),'
	//FRONT_PIC_FEMALE(CircledQuestionMark, 64, 64),
	base_stats_print += '\n\t\t.frontPicYOffset = 0,'
	base_stats_print += '\n\t\t.frontAnimFrames = sAnims_' + stats[base_stats[k]][NAME] + ','
	//.frontAnimId = ANIM_V_SQUISH_AND_BOUNCE,
	base_stats_print += '\n\t\t.enemyMonElevation = 0,'	
//BACKPICS
	base_stats_print += '\n\t\tBACK_PIC(' + stats[base_stats[k]][NAME] + ', 64, 64),'
	//BACK_PIC_FEMALE(CircledQuestionMark, 64, 64),
	base_stats_print += '\n\t\t.backPicYOffset = 0,'
	base_stats_print += '\n\t\t.backAnimId = BACK_ANIM_NONE,'
//PALLETES
	base_stats_print += '\n\t\tPALETTES(' + stats[base_stats[k]][NAME] + '),'
	//PALETTE_FEMALE(CircledQuestionMark),
	base_stats_print += '\n\t\tICON(' + stats[base_stats[k]][NAME] + ', 0),'
	//ICON_FEMALE(QuestionMark, 1),
	//.footprint = gMonFootprint_None,
//LEARNSETS
	base_stats_print += '\n\t\tLEARNSETS(' + stats[base_stats[k]][NAME] + '),'



	
	
//EVOLUTIONS
/*
MultipleEvolutions = 1
for (u = 0; u < Evolution_List.length; u++) {
	if (PokeScapeEvolutions[Evolution_List[u]][0] == stats[base_stats[k]][NAME]) {

		//base_stats_print += '\nMultipleEvolutions = ' + MultipleEvolutions
		if (MultipleEvolutions == 1) {
			base_stats_print += '\n\t\t.evolutions = EVOLUTION('
			if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_ITEM') {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'ITEM_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_HOLD_ITEM') {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'ITEM_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_OTHER_PARTY_MON') {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_MOVE') {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'MOVE_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if ((PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_TYPE_IN_PARTY') || (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_TYPE')) {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'TYPE_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else {
				base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
		}
		else {
			if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_ITEM') {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'ITEM_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_HOLD_ITEM') {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'ITEM_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_OTHER_PARTY_MON') {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_MOVE') {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'MOVE_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else if ((PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_TYPE_IN_PARTY') || (PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() == 'EVO_TYPE')) {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' +  'TYPE_' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
			else {
				base_stats_print += '\t\t\t\t\t\t\t\t{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' + PokeScapeEvolutions[Evolution_List[u]][2].toUpperCase() + ', '  + 'SPECIES_' + PokeScapeEvolutions[Evolution_List[u]][3].toUpperCase() + '},\n'
			}
		}
		//base_stats_print += '\n\t\t.evolutions = EVOLUTION('
		//base_stats_print += '{' + PokeScapeEvolutions[Evolution_List[u]][1].toUpperCase() + ', ' + PokeScapeEvolutions[Evolution_List[u]][2] + ', '  + PokeScapeEvolutions[Evolution_List[u]][3] + '},\n'
		//base_stats_print += '),\n'
		MultipleEvolutions++
		//base_stats_print += '),\n'
	}
}
if (MultipleEvolutions > 1) {
    base_stats_print += '\t\t\t\t\t\t\t\t),';
}
*/
//.evolutions = EVOLUTION(
//	{EVO_LEVEL, 100, SPECIES_NONE},
//	{EVO_ITEM, ITEM_MOOMOO_MILK, SPECIES_NONE}
//	),



/*
	for (u = 0; u < pokedexData.length; u++) {
		if (PokeScapeEvolutions[Evolution_List[u]][EVO_ID] === stats[base_stats[k]][ID]) {
			base_stats_print += 'WOAAOWOAWHAWOH'
		}
	}
*/



	
	//if (evolution[evolutions[k]][EVO_NAME] === stats[base_stats[k]][NAME]) base_stats_print += 'WOAAOWOAWHAWOH'
	//base_stats_print += '\n\t\t.evolutions = EVOLUTION({' + evolution[evolutions[k]][EVO_NAME] + '}),'
	//.evolutions = EVOLUTION({EVO_LEVEL, 100, SPECIES_NONE},
	//						{EVO_ITEM, ITEM_MOOMOO_MILK, SPECIES_NONE}),

	//EVO_NAME = 0;
	//EVO_METHOD = 1;
	//EVO_SECONDARY = 2;
	//EVO_INTO_MON = 3;

	//PokeScapeEvolutions[Evolution_List[k]][EVO_NAME] + ","
	
//SPECIES FORMS
	//.formSpeciesIdTable = sNoneFormSpeciesIdTable,
	//.formChangeTable = sNoneFormChangeTable,
//OTHER
	base_stats_print += '\n\t\t.allPerfectIVs = TRUE,'
	base_stats_print += '\n},\n'
	
        
}
	base_stats_print += '};'
    console.log(base_stats_print)
	fs.writeFile('./output/' + 'Base_Stats.c', base_stats_print, function (err) {
  if (err) throw err;
});

};
//#endregion































//const fs = require('fs');
const evolutions_inputFilePath = 'PokeScape Main Sheet - Evolutions.tsv';
const outputFilePath = 'TestA.txt';

function TestA() {
	// Read the TSV file
	fs.readFile(evolutions_inputFilePath, 'utf8', (err, data) => {
		if (err) {
		console.error(`Error reading the file: ${err}`);
		return;
		}

		//initiate print
		let TestA_print = "";
		TestA_print += 'I hope this works.\n' + data.toUpperCase().replace(/\t/g, '@') + ',\n'

		// Write the data to a new file
		fs.writeFile(outputFilePath, TestA_print, (err) => {
		if (err) {
			console.error(`Error writing the file: ${err}`);
			return;
		}
		console.log(`File has been saved to ${outputFilePath}`);
		});
	});
}

//EVOLUTIONS TEST
/*
function TestA() {
	let TestA_print = "Test printing an output.";
	console.log(TestA_print)
	fs.writeFile('TestA.txt', TestA_print, function (err) {
  	if (err) throw err;
	});
}
*/
//Run the function.
TestA();