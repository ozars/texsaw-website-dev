function Data() {
    /* CONFIGURATION PART */

    this.dates       = ['04/22/2022', '04/23/2022'];
    this.long_name   = 'Texas Security Awareness Week';
    this.short_name  = 'TexSAW';
    this.reg_link    = 'https://utdallas.qualtrics.com/jfe/form/SV_5yYqbY3sEs5msPb';
    this.accom_link  = 'https://utdallas.qualtrics.com/jfe/form/SV_3IgmZASySsgPgpv';
    this.accom_date  = 'TBA';
    this.program_subjects = ['Student Workshops', 'Student Competition'];
    this.program_places   = ['Virtual', 'Virtual'];
    this.reg_enabled         = false;
    this.reg_deadline        = "28 Feb 2022";
    this.accommodation_ready = false;
    this.program_ready       = false;
    this.results_ready       = false;
    this.sw_hw_req_ready     = false;
    this.programs = [
      [
        ['8:30am-9am', ['Check-in and Continental Breakfast']],
        ['9am-10:30am', [
          '<a href="https://docs.google.com/presentation/d/1QyH-fqj5P1V6s7A5baVwb6YlRuAHp1Vn0S-VosGzM0Q/edit?usp=sharing">Penetration Testing</a>',
          'Brandon Marzik, Henry Tran, Ari Bender-Long,<br />Vishal Madipadga']
        ],
        ['10:30am-10:45am', ['Break']],
        ['10:45am-12.15pm', [
          '<a href="presentations/TexSaw - Reverse Engineering .pptx">Reverse Engineering</a>',
          'Lucas Castro, Ricardo Alanis, Eric Rogers,<br />Jennifer Ward']
        ],
        ['12:15pm-1:15pm', ['Lunch (provided)']],
        ['1:15pm-2:15pm', [
          '<b>Guest Lecture/Presentation</b><br /><i>Introduction to CTF Competitions</i>',
          'Henry Wang']
        ],
        ['2:15pm-3:45pm', [
          '<a href="presentations/TXSAW 2019 Forensics .pdf">Digital Forensics</a>',
          'Stephen Ballenger, Xavier Cadot,<br />Hailey Gage, Nick Ramos, Evelyn Wong']
        ]
      ],
      [
        ['9am-9:30am', ['Check-in and Continental Breakfast']],
        ['9:30am-12:30pm', ['CTF Competition']],
        ['12:30pm-1:15pm', ['Lunch (provided)']],
        ['1:15pm-2:00pm', ['Presentation of Solutions']],
        ['2:00pm-2:30pm', ['Award Ceremony and Student Feedback']]
      ]
    ];

    /* AUTO GENERATE PART */

    this.dates       = this.dates.map(x => new Date(x));
    this.year        = 1900 + this.dates[0].getYear();
    this.weekDays    = this.dates.map(x => x.toLocaleDateString('en-US', { weekday : 'long' }));
    this.days        = this.dates.map(x => x.getDate());
    this.daysth      = this.days.map(x => this.ordSuffixOf(x));
    this.months      = this.dates.map(x => x.toLocaleDateString('en-US', { month : 'long' }));
    this.nth         = this.ordSuffixOf(parseInt(this.year) - 2010 - (this.year >= 2022));
    this.short_title = this.short_name + ' ' + this.year;
    this.long_title  = this.nth + ' ' + this.long_name;
    this.meta_desc   =
     `${this.long_title}, ${this.days[0]}-${this.days[1]} ${this.months[0]}
      ${this.year}, Richardson. ${this.short_title} targets students who are
      interested in pursuing computer security. Students will be exposed to
      security concepts which will expand their knowledge of cybersecurity and
      broaden their career opportunities.` .replace(/\s*\r?\n\s*/g, " ");
}

Data.prototype.ordSuffixOf = function(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + 'st';
    }
    if (j == 2 && k != 12) {
        return i + 'nd';
    }
    if (j == 3 && k != 13) {
        return i + 'rd';
    }
    return i + 'th';
}

module.exports = () => new Data();
