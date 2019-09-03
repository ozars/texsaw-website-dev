function Data() {
    /* CONFIGURATION PART */

    this.dates       = ['11/01/2019', '11/02/2019'];
    this.long_name   = 'Texas Security Awareness Week';
    this.short_name  = 'TexSAW';
    this.reg_link    = 'https://ezpay.utdallas.edu/C20239_ustores/web/classic/store_main.jsp?STOREID=158';
    this.accom_link  = 'https://utdallas.qualtrics.com/jfe/form/SV_bei29GAVbrBAxcV';
    this.accom_date  = 'October 19';
    this.program_subjects = ['Student Workshops', 'Student Competition'];
    this.program_places   = ['TI Auditorium, ECSS 2.102', 'TI Auditorium, ECSS 2.102'];
    this.reg_enabled         = false;
    this.accommodation_ready = false;
    this.program_ready       = false;
    this.results_ready       = false;
    this.sw_hw_req_ready     = false;
    this.programs = [
      [
        ['9am-9:30am',      ['Check-in and Continental Breakfast']],
        ['9:30am-11:00am',  [
          '<a href="presentations/TexSaw Penetration Testing_slides.pdf">Penetration Testing</a>',
          '<!-- Presenters TBD -->']
        ],
        ['11:00am-11:15am', ['Break']],
        ['11:15am-12:45pm', [
          '<a href="presentations/Final_TexSaw18-Reverse Engineering_slides.pdf">Reverse Engineering</a>',
          'Alan Padilla, Ricardo Alanis, Stephen Ballenger,<br />Luke Castro, Jake Rawlins']
        ],
        ['12:45pm-1:30pm', ['Lunch (provided)']],
        ['1:30pm-2:30pm', [
          '<b>Guest Lecture/Presentation</b><br />' +
          'Hacking The Industry',
          '<a href="presenter_bio.html">Mitch Adair</a>']
        ],
        ['2:30pm-4:00pm', [
          '<a href="presentations/WebSecurity_slides.pdf">Web Exploitation</a>',
          'Jace Baker, Nick Ramos, Hugo Espiritu, Andrew Le']
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
    this.nth         = this.ordSuffixOf(parseInt(this.year) - 2010);
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
