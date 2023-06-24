import '../../styles/Translate.css';
import React from 'react';

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: {
        af: 'Afrikaans',
        sq: 'Albanian',
        am: 'Amharic',
        ar: 'Arabic',
        hy: 'Armenian',
        as: 'Assamese',
        ay: 'Aymara',
        az: 'Azerbaijani',
        bm: 'Bambara',
        eu: 'Basque',
        be: 'Belarusian',
        bn: 'Bengali',
        bho: 'Bhojpuri',
        bs: 'Bosnian',
        bg: 'Bulgarian',
        ca: 'Catalan',
        ceb: 'Cebuano',
        ny: 'Chichewa',
        'zh-CN': 'Chinese (Simplified)',
        'zh-TW': 'Chinese (Traditional)',
        co: 'Corsican',
        hr: 'Croatian',
        cs: 'Czech',
        da: 'Danish',
        dv: 'Dhivehi',
        doi: 'Dogri',
        nl: 'Dutch',
        en: 'English',
        eo: 'Esperanto',
        et: 'Estonian',
        ee: 'Ewe',
        tl: 'Filipino',
        fi: 'Finnish',
        fr: 'French',
        fy: 'Frisian',
        gl: 'Galician',
        ka: 'Georgian',
        de: 'German',
        el: 'Greek',
        gn: 'Guarani',
        gu: 'Gujarati',
        ht: 'Haitian Creole',
        ha: 'Hausa',
        haw: 'Hawaiian',
        iw: 'Hebrew',
        he: 'Hebrew',
        hi: 'Hindi',
        hmn: 'Hmong',
        hu: 'Hungarian',
        is: 'Icelandic',
        ig: 'Igbo',
        ilo: 'Ilocano',
        id: 'Indonesian',
        ga: 'Irish',
        it: 'Italian',
        ja: 'Japanese',
        jw: 'Javanese',
        kn: 'Kannada',
        kk: 'Kazakh',
        km: 'Khmer',
        rw: 'Kinyarwanda',
        gom: 'Konkani',
        ko: 'Korean',
        kri: 'Krio',
        ku: 'Kurdish (Kurmanji)',
        ckb: 'Kurdish (Sorani)',
        ky: 'Kyrgyz',
        lo: 'Lao',
        la: 'Latin',
        lv: 'Latvian',
        ln: 'Lingala',
        lt: 'Lithuanian',
        lg: 'Luganda',
        lb: 'Luxembourgish',
        mk: 'Macedonian',
        mai: 'Maithili',
        mg: 'Malagasy',
        ms: 'Malay',
        ml: 'Malayalam',
        mt: 'Maltese',
        mi: 'Maori',
        mr: 'Marathi',
        'mni-Mtei': 'Meiteilon (Manipuri)',
        lus: 'Mizo',
        mn: 'Mongolian',
        my: 'Myanmar (Burmese)',
        ne: 'Nepali',
        no: 'Norwegian',
        or: 'Odia (Oriya)',
        om: 'Oromo',
        ps: 'Pashto',
        fa: 'Persian',
        pl: 'Polish',
        pt: 'Portuguese',
        pa: 'Punjabi',
        qu: 'Quechua',
        ro: 'Romanian',
        ru: 'Russian',
        sm: 'Samoan',
        sa: 'Sanskrit',
        gd: 'Scots Gaelic',
        nso: 'Sepedi',
        sr: 'Serbian',
        st: 'Sesotho',
        sn: 'Shona',
        sd: 'Sindhi',
        si: 'Sinhala',
        sk: 'Slovak',
        sl: 'Slovenian',
        so: 'Somali',
        es: 'Spanish',
        su: 'Sundanese',
        sw: 'Swahili',
        sv: 'Swedish',
        tg: 'Tajik',
        ta: 'Tamil',
        tt: 'Tatar',
        te: 'Telugu',
        th: 'Thai',
        ti: 'Tigrinya',
        ts: 'Tsonga',
        tr: 'Turkish',
        tk: 'Turkmen',
        ak: 'Twi',
        uk: 'Ukrainian',
        ur: 'Urdu',
        ug: 'Uyghur',
        uz: 'Uzbek',
        vi: 'Vietnamese',
        cy: 'Welsh',
        xh: 'Xhosa',
        yi: 'Yiddish',
        yo: 'Yoruba',
        zu: 'Zulu',
      },
      lang: 'id',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.state.lang);
    this.setState({
      lang: e.target.value,
    });
  }

  render() {
    let languages = Object.entries(this.state.languages).map((key, i) => (
      <option value={key[0]} key={i + key[0]}>
        {key[1]}
      </option>
    ));

    return (
      <div className="translateContainer">
        <div className="languageBox">
          <label htmlFor="language">Language</label>
          <select name="language" id="language" onChange={this.handleChange} value={this.state.lang}>
            {languages}
          </select>
        </div>
        <button id="translate" /*onClick={this.props.translate}*/>
          <i className="bi bi-translate"></i> Translate
        </button>
      </div>
    );
  }
}

export default Translate;
