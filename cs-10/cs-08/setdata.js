class SetData {
  nickName() {
    const randomNumber = (num) => Math.floor(Math.random() * (num - 0) + 0);
    const englishName = [
      'Ethan',
      'Jacob',
      'Michael',
      'Alexander',
      'William',
      'Joshua',
      'Daniel',
      'Jayden',
      'Noah',
      'Anthony',
      'Christopher',
      'Aiden',
      'Matthew',
      'David',
      'Andrew',
      'Joseph',
      'Logan',
      'James',
      'Ryan',
      'Benjamin',
      'Elijah',
      'Gabriel',
      'Christian',
      'Nathan',
      'Jackson',
      'John',
      'Samuel',
      'Tyler',
      'Dylan',
      'Jonathan',
      'Caleb',
      'Nicholas',
      'Gavin',
      'Mason',
      'Evan',
      'Landon',
      'Angel',
      'Brandon',
      'Lucas',
      'Isaac',
      'Isaiah',
      'Jack',
      'Jose',
      'Kevin',
      'Jordan',
      'Justin',
      'Brayden',
      'Luke',
      'Liam',
      'Carter',
      'Isabella',
      'Emma',
      'Olivia',
      'Sophia',
      'Ava',
      'Emily',
      'Madison',
      'Abigail',
      'Chloe',
      'Mia',
      'Elizabeth',
      'Addison',
      'Alexis',
      'Ella',
      'Samantha',
      'Natalie',
      'Grace',
      'Lily',
      'Alyssa',
      'Ashley',
      'Sarah',
      'Taylor',
      'Hannah',
      'Brianna',
      'Hailey',
      'Kaylee',
      'Lillian',
      'Leah',
      'Anna',
      'Allison',
      'Victoria',
      'Avery',
      'Gabriella',
      'Nevaeh',
      'Kayla',
      'Sofia',
      'Brooklyn',
      'Riley',
      'Evelyn',
      'Savannah',
      'Aubrey',
      'Alexa',
      'Peyton',
      'Makayla',
      'Layla',
      'Lauren',
      'Zoe',
      'Sydney',
      'Audrey',
      'Julia',
    ];
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    const extractNumber = (num) => {
      let string = '';
      for (let i = 0; i < num; i++) {
        string += randomNumber(9);
      }
      return string;
    };

    const extractString = (num, arr) => {
      let string = '';
      for (let i = 0; i < num; i++) {
        string += arr[randomNumber(arr.length)];
      }
      return string;
    };

    let nick = extractString(1, englishName) + extractString(3, alphabet) + extractNumber(4);

    return nick;
  }
  money() {
    const randomNumber = (num) => Math.floor(Math.random() * (num - 0) + 1);
    return `${randomNumber(100000)}`;
  }
  randomDate(date1, date2) {
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970';
    var date2 = date2 || new Date().toLocaleDateString();
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if (date1 > date2) {
      return new Date(randomValueBetween(date2, date1)).toISOString().split('T').join(' ').slice(0, -5);
    } else {
      return new Date(randomValueBetween(date1, date2)).toISOString().split('T').join(' ').slice(0, -5);
    }
  }
}

module.exports = { SetData };
