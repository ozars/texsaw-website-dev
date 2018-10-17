function Data() {
    /* CONFIGURATION PART */

    this.year        = '2018';
    this.dates       = ['11/02/2018', '11/03/2018'];
    this.long_name   = 'Texas Security Awareness Week';
    this.short_name  = 'TexSAW';
    this.reg_link    = 'https://ezpay.utdallas.edu/C20239_ustores/web/classic/store_main.jsp?STOREID=158';
    this.accom_link  = 'https://utdallas.qualtrics.com/jfe/form/SV_bei29GAVbrBAxcV';
    this.accom_date  = 'October 19';
    this.program_subjects = ['Student Workshops', 'Student Competition'];
    this.program_places   = ['TI Auditorium, ECSS 2.102', 'TI Auditorium, ECSS 2.102'];
    this.program_ready    = true;
    this.sw_hw_req_ready  = false;
    this.programs = [
      [
        ['9am-9:30am',      ['Check-in and Continental Breakfast']],
        ['9:30am-11:00am',  [
          '<a href="#TBD">Penetration Testing</a>',
          '<!-- Presenters TBD -->']
        ],
        ['11:00am-11:15am', ['Break']],
        ['11:15am-12:45pm', [
          '<a href="#TBD">Reverse Engineering</a>',
          '<!-- Presenters TBD -->']
        ],
        ['12:45pm-1:30pm', ['Lunch (provided)']],
        ['1:30pm-2:30pm', [
          '<b>Guest Lecture/Presentation</b><br />' +
          '<a href="#TBD">Topic TBD</a>',
          'Mitch Adair']
        ],
        ['2:30pm-4:00pm', [
          '<a href="#TBD">Web Exploitation</a>',
          '<!-- Presenters TBD -->']
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

    this.nth         = this.ordSuffixOf(parseInt(this.year) - 2010);
    this.short_title = this.short_name + ' ' + this.year;
    this.long_title  = this.nth + ' ' + this.long_name;
    this.dates       = this.dates.map(x => new Date(x));
    this.weekDays    = this.dates.map(x => x.toLocaleDateString('en-US', { weekday : 'long' }));
    this.days        = this.dates.map(x => x.getDate());
    this.daysth      = this.days.map(x => this.ordSuffixOf(x));
    this.months      = this.dates.map(x => x.toLocaleDateString('en-US', { month : 'long' }));
    this.meta_desc   =
     `${this.long_title}, ${this.days[0]}-${this.days[1]} ${this.months[0]}
      ${this.year}, Richardson. ${this.short_title} targets students who are
      interested in pursuing computer security. Students will be exposed to
      security concepts which will expand their knowledge of cyber security and
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
