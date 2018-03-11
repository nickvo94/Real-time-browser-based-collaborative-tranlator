/* eslint no-unused-vars: 'off' */
/* eslint linebreak-style: ['error', 'windows'] */
/* eslint no-trailing-spaces: 'error' */
/* eslint no-trailing-spaces: ['error', { 'skipBlankLines': true }] */

// Enter an API key from the Google API Console:
// https://console.developers.google.com/apis/credentials

let isoLangs = {
  'ab':{
      'name':'Abkhaz',
      'nativeName':'аҧсуа'
  },
  'aa':{
      'name':'Afar',
      'nativeName':'Afaraf'
  },
  'af':{
      'name':'Afrikaans',
      'nativeName':'Afrikaans'
  },
  'ak':{
      'name':'Akan',
      'nativeName':'Akan'
  },
  'sq':{
      'name':'Albanian',
      'nativeName':'Shqip'
  },
  'am':{
      'name':'Amharic',
      'nativeName':'አማርኛ'
  },
  'ar':{
      'name':'Arabic',
      'nativeName':'العربية'
  },
  'an':{
      'name':'Aragonese',
      'nativeName':'Aragonés'
  },
  'hy':{
      'name':'Armenian',
      'nativeName':'Հայերեն'
  },
  'as':{
      'name':'Assamese',
      'nativeName':'অসমীয়া'
  },
  'av':{
      'name':'Avaric',
      'nativeName':'авар мацӀ, магӀарул мацӀ'
  },
  'ae':{
      'name':'Avestan',
      'nativeName':'avesta'
  },
  'ay':{
      'name':'Aymara',
      'nativeName':'aymar aru'
  },
  'az':{
      'name':'Azerbaijani',
      'nativeName':'azərbaycan dili'
  },
  'bm':{
      'name':'Bambara',
      'nativeName':'bamanankan'
  },
  'ba':{
      'name':'Bashkir',
      'nativeName':'башҡорт теле'
  },
  'eu':{
      'name':'Basque',
      'nativeName':'euskara, euskera'
  },
  'be':{
      'name':'Belarusian',
      'nativeName':'Беларуская'
  },
  'bn':{
      'name':'Bengali',
      'nativeName':'বাংলা'
  },
  'bh':{
      'name':'Bihari',
      'nativeName':'भोजपुरी'
  },
  'bi':{
      'name':'Bislama',
      'nativeName':'Bislama'
  },
  'bs':{
      'name':'Bosnian',
      'nativeName':'bosanski jezik'
  },
  'br':{
      'name':'Breton',
      'nativeName':'brezhoneg'
  },
  'bg':{
      'name':'Bulgarian',
      'nativeName':'български език'
  },
  'my':{
      'name':'Burmese',
      'nativeName':'ဗမာစာ'
  },
  'ca':{
      'name':'Catalan; Valencian',
      'nativeName':'Català'
  },
  'ch':{
      'name':'Chamorro',
      'nativeName':'Chamoru'
  },
  'ce':{
      'name':'Chechen',
      'nativeName':'нохчийн мотт'
  },
  'ny':{
      'name':'Chichewa; Chewa; Nyanja',
      'nativeName':'chiCheŵa, chinyanja'
  },
  'zh':{
      'name':'Chinese',
      'nativeName':'中文 (Zhōngwén), 汉语, 漢語'
  },
  'cv':{
      'name':'Chuvash',
      'nativeName':'чӑваш чӗлхи'
  },
  'kw':{
      'name':'Cornish',
      'nativeName':'Kernewek'
  },
  'co':{
      'name':'Corsican',
      'nativeName':'corsu, lingua corsa'
  },
  'cr':{
      'name':'Cree',
      'nativeName':'ᓀᐦᐃᔭᐍᐏᐣ'
  },
  'hr':{
      'name':'Croatian',
      'nativeName':'hrvatski'
  },
  'cs':{
      'name':'Czech',
      'nativeName':'česky, čeština'
  },
  'da':{
      'name':'Danish',
      'nativeName':'dansk'
  },
  'dv':{
      'name':'Divehi; Dhivehi; Maldivian;',
      'nativeName':'ދިވެހި'
  },
  'nl':{
      'name':'Dutch',
      'nativeName':'Nederlands, Vlaams'
  },
  'en':{
      'name':'English',
      'nativeName':'English'
  },
  'eo':{
      'name':'Esperanto',
      'nativeName':'Esperanto'
  },
  'et':{
      'name':'Estonian',
      'nativeName':'eesti, eesti keel'
  },
  'ee':{
      'name':'Ewe',
      'nativeName':'Eʋegbe'
  },
  'fo':{
      'name':'Faroese',
      'nativeName':'føroyskt'
  },
  'fj':{
      'name':'Fijian',
      'nativeName':'vosa Vakaviti'
  },
  'fi':{
      'name':'Finnish',
      'nativeName':'suomi, suomen kieli'
  },
  'fr':{
      'name':'French',
      'nativeName':'français, langue française'
  },
  'ff':{
      'name':'Fula; Fulah; Pulaar; Pular',
      'nativeName':'Fulfulde, Pulaar, Pular'
  },
  'gl':{
      'name':'Galician',
      'nativeName':'Galego'
  },
  'ka':{
      'name':'Georgian',
      'nativeName':'ქართული'
  },
  'de':{
      'name':'German',
      'nativeName':'Deutsch'
  },
  'el':{
      'name':'Greek, Modern',
      'nativeName':'Ελληνικά'
  },
  'gn':{
      'name':'Guaraní',
      'nativeName':'Avañeẽ'
  },
  'gu':{
      'name':'Gujarati',
      'nativeName':'ગુજરાતી'
  },
  'ht':{
      'name':'Haitian; Haitian Creole',
      'nativeName':'Kreyòl ayisyen'
  },
  'ha':{
      'name':'Hausa',
      'nativeName':'Hausa, هَوُسَ'
  },
  'he':{
      'name':'Hebrew (modern)',
      'nativeName':'עברית'
  },
  'hz':{
      'name':'Herero',
      'nativeName':'Otjiherero'
  },
  'hi':{
      'name':'Hindi',
      'nativeName':'हिन्दी, हिंदी'
  },
  'ho':{
      'name':'Hiri Motu',
      'nativeName':'Hiri Motu'
  },
  'hu':{
      'name':'Hungarian',
      'nativeName':'Magyar'
  },
  'ia':{
      'name':'Interlingua',
      'nativeName':'Interlingua'
  },
  'id':{
      'name':'Indonesian',
      'nativeName':'Bahasa Indonesia'
  },
  'ie':{
      'name':'Interlingue',
      'nativeName':'Originally called Occidental; then Interlingue after WWII'
  },
  'ga':{
      'name':'Irish',
      'nativeName':'Gaeilge'
  },
  'ig':{
      'name':'Igbo',
      'nativeName':'Asụsụ Igbo'
  },
  'ik':{
      'name':'Inupiaq',
      'nativeName':'Iñupiaq, Iñupiatun'
  },
  'io':{
      'name':'Ido',
      'nativeName':'Ido'
  },
  'is':{
      'name':'Icelandic',
      'nativeName':'Íslenska'
  },
  'it':{
      'name':'Italian',
      'nativeName':'Italiano'
  },
  'iu':{
      'name':'Inuktitut',
      'nativeName':'ᐃᓄᒃᑎᑐᑦ'
  },
  'ja':{
      'name':'Japanese',
      'nativeName':'日本語 (にほんご／にっぽんご)'
  },
  'jv':{
      'name':'Javanese',
      'nativeName':'basa Jawa'
  },
  'kl':{
      'name':'Kalaallisut, Greenlandic',
      'nativeName':'kalaallisut, kalaallit oqaasii'
  },
  'kn':{
      'name':'Kannada',
      'nativeName':'ಕನ್ನಡ'
  },
  'kr':{
      'name':'Kanuri',
      'nativeName':'Kanuri'
  },
  'ks':{
      'name':'Kashmiri',
      'nativeName':'कश्मीरी, كشميري‎'
  },
  'kk':{
      'name':'Kazakh',
      'nativeName':'Қазақ тілі'
  },
  'km':{
      'name':'Khmer',
      'nativeName':'ភាសាខ្មែរ'
  },
  'ki':{
      'name':'Kikuyu, Gikuyu',
      'nativeName':'Gĩkũyũ'
  },
  'rw':{
      'name':'Kinyarwanda',
      'nativeName':'Ikinyarwanda'
  },
  'ky':{
      'name':'Kirghiz, Kyrgyz',
      'nativeName':'кыргыз тили'
  },
  'kv':{
      'name':'Komi',
      'nativeName':'коми кыв'
  },
  'kg':{
      'name':'Kongo',
      'nativeName':'KiKongo'
  },
  'ko':{
      'name':'Korean',
      'nativeName':'한국어 (韓國語), 조선말 (朝鮮語)'
  },
  'ku':{
      'name':'Kurdish',
      'nativeName':'Kurdî, كوردی‎'
  },
  'kj':{
      'name':'Kwanyama, Kuanyama',
      'nativeName':'Kuanyama'
  },
  'la':{
      'name':'Latin',
      'nativeName':'latine, lingua latina'
  },
  'lb':{
      'name':'Luxembourgish, Letzeburgesch',
      'nativeName':'Lëtzebuergesch'
  },
  'lg':{
      'name':'Luganda',
      'nativeName':'Luganda'
  },
  'li':{
      'name':'Limburgish, Limburgan, Limburger',
      'nativeName':'Limburgs'
  },
  'ln':{
      'name':'Lingala',
      'nativeName':'Lingála'
  },
  'lo':{
      'name':'Lao',
      'nativeName':'ພາສາລາວ'
  },
  'lt':{
      'name':'Lithuanian',
      'nativeName':'lietuvių kalba'
  },
  'lu':{
      'name':'Luba-Katanga',
      'nativeName':''
  },
  'lv':{
      'name':'Latvian',
      'nativeName':'latviešu valoda'
  },
  'gv':{
      'name':'Manx',
      'nativeName':'Gaelg, Gailck'
  },
  'mk':{
      'name':'Macedonian',
      'nativeName':'македонски јазик'
  },
  'mg':{
      'name':'Malagasy',
      'nativeName':'Malagasy fiteny'
  },
  'ms':{
      'name':'Malay',
      'nativeName':'bahasa Melayu, بهاس ملايو‎'
  },
  'ml':{
      'name':'Malayalam',
      'nativeName':'മലയാളം'
  },
  'mt':{
      'name':'Maltese',
      'nativeName':'Malti'
  },
  'mi':{
      'name':'Māori',
      'nativeName':'te reo Māori'
  },
  'mr':{
      'name':'Marathi (Marāṭhī)',
      'nativeName':'मराठी'
  },
  'mh':{
      'name':'Marshallese',
      'nativeName':'Kajin M̧ajeļ'
  },
  'mn':{
      'name':'Mongolian',
      'nativeName':'монгол'
  },
  'na':{
      'name':'Nauru',
      'nativeName':'Ekakairũ Naoero'
  },
  'nv':{
      'name':'Navajo, Navaho',
      'nativeName':'Diné bizaad, Dinékʼehǰí'
  },
  'nb':{
      'name':'Norwegian Bokmål',
      'nativeName':'Norsk bokmål'
  },
  'nd':{
      'name':'North Ndebele',
      'nativeName':'isiNdebele'
  },
  'ne':{
      'name':'Nepali',
      'nativeName':'नेपाली'
  },
  'ng':{
      'name':'Ndonga',
      'nativeName':'Owambo'
  },
  'nn':{
      'name':'Norwegian Nynorsk',
      'nativeName':'Norsk nynorsk'
  },
  'no':{
      'name':'Norwegian',
      'nativeName':'Norsk'
  },
  'ii':{
      'name':'Nuosu',
      'nativeName':'ꆈꌠ꒿ Nuosuhxop'
  },
  'nr':{
      'name':'South Ndebele',
      'nativeName':'isiNdebele'
  },
  'oc':{
      'name':'Occitan',
      'nativeName':'Occitan'
  },
  'oj':{
      'name':'Ojibwe, Ojibwa',
      'nativeName':'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  'cu':{
      'name':'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
      'nativeName':'ѩзыкъ словѣньскъ'
  },
  'om':{
      'name':'Oromo',
      'nativeName':'Afaan Oromoo'
  },
  'or':{
      'name':'Oriya',
      'nativeName':'ଓଡ଼ିଆ'
  },
  'os':{
      'name':'Ossetian, Ossetic',
      'nativeName':'ирон æвзаг'
  },
  'pa':{
      'name':'Panjabi, Punjabi',
      'nativeName':'ਪੰਜਾਬੀ, پنجابی‎'
  },
  'pi':{
      'name':'Pāli',
      'nativeName':'पाऴि'
  },
  'fa':{
      'name':'Persian',
      'nativeName':'فارسی'
  },
  'pl':{
      'name':'Polish',
      'nativeName':'polski'
  },
  'ps':{
      'name':'Pashto, Pushto',
      'nativeName':'پښتو'
  },
  'pt':{
      'name':'Portuguese',
      'nativeName':'Português'
  },
  'qu':{
      'name':'Quechua',
      'nativeName':'Runa Simi, Kichwa'
  },
  'rm':{
      'name':'Romansh',
      'nativeName':'rumantsch grischun'
  },
  'rn':{
      'name':'Kirundi',
      'nativeName':'kiRundi'
  },
  'ro':{
      'name':'Romanian, Moldavian, Moldovan',
      'nativeName':'română'
  },
  'ru':{
      'name':'Russian',
      'nativeName':'русский язык'
  },
  'sa':{
      'name':'Sanskrit (Saṁskṛta)',
      'nativeName':'संस्कृतम्'
  },
  'sc':{
      'name':'Sardinian',
      'nativeName':'sardu'
  },
  'sd':{
      'name':'Sindhi',
      'nativeName':'सिन्धी, سنڌي، سندھی‎'
  },
  'se':{
      'name':'Northern Sami',
      'nativeName':'Davvisámegiella'
  },
  'sm':{
      'name':'Samoan',
      'nativeName':'gagana faa Samoa'
  },
  'sg':{
      'name':'Sango',
      'nativeName':'yângâ tî sängö'
  },
  'sr':{
      'name':'Serbian',
      'nativeName':'српски језик'
  },
  'gd':{
      'name':'Scottish Gaelic; Gaelic',
      'nativeName':'Gàidhlig'
  },
  'sn':{
      'name':'Shona',
      'nativeName':'chiShona'
  },
  'si':{
      'name':'Sinhala, Sinhalese',
      'nativeName':'සිංහල'
  },
  'sk':{
      'name':'Slovak',
      'nativeName':'slovenčina'
  },
  'sl':{
      'name':'Slovene',
      'nativeName':'slovenščina'
  },
  'so':{
      'name':'Somali',
      'nativeName':'Soomaaliga, af Soomaali'
  },
  'st':{
      'name':'Southern Sotho',
      'nativeName':'Sesotho'
  },
  'es':{
      'name':'Spanish; Castilian',
      'nativeName':'español, castellano'
  },
  'su':{
      'name':'Sundanese',
      'nativeName':'Basa Sunda'
  },
  'sw':{
      'name':'Swahili',
      'nativeName':'Kiswahili'
  },
  'ss':{
      'name':'Swati',
      'nativeName':'SiSwati'
  },
  'sv':{
      'name':'Swedish',
      'nativeName':'svenska'
  },
  'ta':{
      'name':'Tamil',
      'nativeName':'தமிழ்'
  },
  'te':{
      'name':'Telugu',
      'nativeName':'తెలుగు'
  },
  'tg':{
      'name':'Tajik',
      'nativeName':'тоҷикӣ, toğikī, تاجیکی‎'
  },
  'th':{
      'name':'Thai',
      'nativeName':'ไทย'
  },
  'ti':{
      'name':'Tigrinya',
      'nativeName':'ትግርኛ'
  },
  'bo':{
      'name':'Tibetan Standard, Tibetan, Central',
      'nativeName':'བོད་ཡིག'
  },
  'tk':{
      'name':'Turkmen',
      'nativeName':'Türkmen, Түркмен'
  },
  'tl':{
      'name':'Tagalog',
      'nativeName':'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
  },
  'tn':{
      'name':'Tswana',
      'nativeName':'Setswana'
  },
  'to':{
      'name':'Tonga (Tonga Islands)',
      'nativeName':'faka Tonga'
  },
  'tr':{
      'name':'Turkish',
      'nativeName':'Türkçe'
  },
  'ts':{
      'name':'Tsonga',
      'nativeName':'Xitsonga'
  },
  'tt':{
      'name':'Tatar',
      'nativeName':'татарча, tatarça, تاتارچا‎'
  },
  'tw':{
      'name':'Twi',
      'nativeName':'Twi'
  },
  'ty':{
      'name':'Tahitian',
      'nativeName':'Reo Tahiti'
  },
  'ug':{
      'name':'Uighur, Uyghur',
      'nativeName':'Uyƣurqə, ئۇيغۇرچە‎'
  },
  'uk':{
      'name':'Ukrainian',
      'nativeName':'українська'
  },
  'ur':{
      'name':'Urdu',
      'nativeName':'اردو'
  },
  'uz':{
      'name':'Uzbek',
      'nativeName':'zbek, Ўзбек, أۇزبېك‎'
  },
  've':{
      'name':'Venda',
      'nativeName':'Tshivenḓa'
  },
  'vi':{
      'name':'Vietnamese',
      'nativeName':'Tiếng Việt'
  },
  'vo':{
      'name':'Volapük',
      'nativeName':'Volapük'
  },
  'wa':{
      'name':'Walloon',
      'nativeName':'Walon'
  },
  'cy':{
      'name':'Welsh',
      'nativeName':'Cymraeg'
  },
  'wo':{
      'name':'Wolof',
      'nativeName':'Wollof'
  },
  'fy':{
      'name':'Western Frisian',
      'nativeName':'Frysk'
  },
  'xh':{
      'name':'Xhosa',
      'nativeName':'isiXhosa'
  },
  'yi':{
      'name':'Yiddish',
      'nativeName':'ייִדיש'
  },
  'yo':{
      'name':'Yoruba',
      'nativeName':'Yorùbá'
  },
  'za':{
      'name':'Zhuang, Chuang',
      'nativeName':'Saɯ cueŋƅ, Saw cuengh'
  }
}

const apiKey = 'AIzaSyCNJ02bx_FSpEw3PIfSoBECtyYlIgHXFjs';
let oldStr = ' ';
let myVar
let tryLang;
let textAPI;
let intMode = 1;

// myVar = setInterval(myTimer, 2000);
               
function myTimer(){
  let translationObj = {};
  textAPI = document.getElementById('final_span').innerHTML;
  console.log('enter timer');
  // let textAPI = document.getElementById('final_span').innerHTML;
  console.log(textAPI);     
  // comparing old and new string
  if (textAPI != oldStr) {          
      if (translationObj.targetLang !== null) {    
        translationObj = {
          sourceLang: $('.source-lang').val(),
          targetLang: $('.target-lang').val(),
          textToTranslate: document.getElementById('final_span').innerHTML,                
        };
        translate(translationObj);
        console.log('sent translate in interval');
      }
      oldStr = textAPI;
      console.log('end interval')
    }        
  // clearInterval(myVar);
}

// Set endpoints
const endpoints = {
  translate: '',
  detect: 'detect',
  languages: 'languages',
};

// Abstract API request function
function makeApiRequest(endpoint, data, type, authNeeded, successCallBack) {
  console.log(endpoint, data, type);
  let url = 'https://www.googleapis.com/language/translate/v2/' + endpoint;
  url += '?key=' + apiKey;

  // If not listing languages, send text to translate
  if (endpoint !== endpoints.languages) {
    // url += '&q=' + encodeURI(data.textToTranslate);
    url += '&q=' + document.getElementById('final_span').innerHTML;
  }

  // If translating, send target and source languages
  if (endpoint === endpoints.translate) {
    // url += '&target=' + data.sourceLang;
    tryLang = select_dialect.value;
    tryLang = tryLang.substring(0, tryLang.indexOf('-'));
    console.log(data.sourceLang, tryLang );
    url += '&target=' + data.targetLang;
    url += '&source=' + tryLang;
  }

  console.log(url);

  // Return response from API
  return $.ajax({
    url: url,
    type: type || 'GET',
    data: data ? JSON.stringify(data) : '',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      },
      success: successCallBack ? successCallBack : null
  });
}

// Translate
function translate(data) {
    makeApiRequest(endpoints.translate, data, 'GET', false, successTranslate).done(function () { });
}

function successTranslate(resp, textStatus, jQxhr) {
    $('.target').text(resp.data.translations[0].translatedText);
    $('h2.detection-heading').hide();
    $('h2.translation-heading, p').show();
    console.log(resp);
}
// Detect language
function detect(data) {
  makeApiRequest(endpoints.detect, data, 'GET', false).done(function(resp) {
    let source = resp.data.detections[0][0].language;
    let conf = resp.data.detections[0][0].confidence.toFixed(2) * 100;

    $('.source-lang option')
      .filter(function() {
        return $(this).val() === source; //To select Blue
      })
      .prop('selected', true);
    $.when(getLanguageNames()).then(function(data) {
      $('p.target').text(data[source] + ' with ' + conf + '% confidence');
    });
    $('h2.translation-heading').hide();
    $('h2.detection-heading, p').show();
  });
}

// Get languages
function getLanguages() {
  makeApiRequest(endpoints.languages, null, 'GET', false).done(function(resp) {
    // $.when(getLanguageNames()).then(function(data) {
    // $.each(resp.data.languages, function(i, obj) {
      console.log(resp);
      $.each(resp.data.languages, function(i, obj) {
        if (isoLangs[obj.language]) {
            $('.source-lang, .target-lang').append(
              '<option value="' +
                obj.language +
                '">' +
                isoLangs[obj.language]['name'] + 
                '; ' + 
                isoLangs[obj.language]['nativeName'] +
                '</option>'
            );          
          console.log(obj.language, isoLangs[obj.language]);
        }
      });
    });
  //});
}

// Convert country code to country name
function getLanguageNames() {
  return $.getJSON('https://api.myjson.com/bins/155kj1');
}

function changeMode() {
    let mode = document.getElementById('modeSelect').value;
    if (mode < 3) {
        clearInterval(myVar);
    }
    else {
        myVar = setInterval(myTimer, 2000);
    }
}

// On document ready
$(function() {
    window.makeApiRequest = makeApiRequest;
    let translationObj = {};

    // Popuplate source and target language dropdowns
    getLanguages();

    $(document)
        // Bind translate function to speech button
        .on('click', 'button.start', function () {
            tryLang = select_dialect.value;
            tryLang = tryLang.substring(0, tryLang.indexOf('-'));
            translationObj = {
                sourceLang: tryLang,
                targetLang: $('.target-lang').val(),
                textToTranslate: document.getElementById('final_span').innerHTML,
            };

            if (translationObj.targetLang !== null) {
                translate(translationObj);
            } else {
                alert('Please select a target language');
            }
            console.log('out on Click');

        })

        // Bind detect function to detect button
        .on('click', 'button.detect', function () {
            translationObj = {
                textToTranslate: document.getElementById('final_span').innerHTML,
            };

            detect(translationObj);
        })
});

