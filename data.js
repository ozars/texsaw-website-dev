function Data() {
    /* CONFIGURATION PART */

    this.year        = '2018';
    this.dates       = ['11/02/2018', '11/03/2018'];
    this.long_name   = 'Texas Security Awareness Week';
    this.short_name  = 'TexSAW';
    this.reg_link    = 'https://ezpay.utdallas.edu/C20239_ustores/web/classic/store_main.jsp?STOREID=158';
    this.accom_link  = 'https://utdallas.qualtrics.com/jfe/form/SV_bei29GAVbrBAxcV';
    this.accom_date  = 'October 17';
    this.meta_desc   = `Texas Security Awareness Week targets students who are
      interested in pursuing computer security.`.replace(/\s*\r?\n\s*/g, " ");
    this.program_subjects = ['Student Workshops', 'Student Competition'];
    this.program_places   = ['TI Auditorium, ECSS 2.102', 'TI Auditorium, ECSS 2.102'];
    this.programs = [
      [
        ['9am-9:30am',      ['Check-in and Continental Breakfast']],
        ['9:30am-11:00am',  [
          '<a href="presentations/WebSecurity_TexSAW2017.pptx">Web Security</a>',
          'Travis Wright, Marina George, Nick Ramos']
        ],
        ['11:00am-11:15am', ['Break']],
        ['11:15am-12:45pm', [
          '<a href="presentations/REPresentation.pdf">An Introduction to Reverse Engineering</a>',
          'Ian Brown, Ryan Kao, Alan Padilla']
        ],
        ['12:45pm-1:30pm', ['Lunch (provided)']],
        ['1:30pm-2:30pm', [
          '<b>State Farm Guest Lecture/Presentation</b><br />' +
          '<a href="#TBD">Changes and Growth in Cybersecurity</a>',
          '<a href="state_farm_bio.html">Sean Hollingsead</a>']
        ],
        ['2:30pm-4:00pm', [
          '<a href="presentations/TEXSAW 2017 Cryptography.pdf">Cryptography</a>',
          'Kyle Tillotson, Hugo Espiritu, Tristan Duckworth']
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
