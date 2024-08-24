// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.

// Kodu buraya yazalım...

const highScore: boolean | number = true;

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın.
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.

// Kodu buraya yazalım...

const stuff: number[] | string[] = [];

// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "SkillLevel" isminde bir literal türü oluşturalım (enum değil, literal tür).
// Bu tür, "Beginner", "Intermediate", "Advanced", ve "Expert" değerlerini alabilsin.

// Kodu buraya yazalım...

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

function printLitType(skillLevel: SkillLevel) {
  console.log(skillLevel);
}

printLitType("Beginner");

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "SkiSchoolStudent" isminde bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - name bir string olsun
// - age bir numara olsun
// - sport değeri "ski" veya "snowboard" olsun
// - level ise yukarıda oluşturduğumuz SkillLevel türünden bir değer olsun

// Kodu buraya yazalım...

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: "beginner";
};

function printSchoolType(SkiSchoolStudent: SkiSchoolStudent) {
  console.log(SkiSchoolStudent);
}

printSchoolType("name");

// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun

// Kodu buraya yazalım...

type RGB = {
  r: number;
  g: number;
  b: number;
};

const red: RGB = {
  r: 255,
  g: 0,
  b: 0,
};

function colorN(color: RGB) {
  return "Hello " + color.r;
}
console.log(colorN(red));
// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun

// Kodu buraya yazalım...

type HSL = {
    h: number;
    s: number;
    l: number;
  };
  
  const blue: HSL = {
    h: 195,
    s: 53,
    l: 79,
  };
  
  function hasColors(color: HSL) {
    return "Hello " + color.h;
  }
  console.log(hasColors(blue));


// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler
// bulunabilsin.

// Kodu buraya yazalım...
const colors: RGB|HSL =[
]

// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.

// Kodu buraya yazalım...
function greet(names: string | string[]): void {
    // Check if the input is a single string
    if (typeof names === 'string') {
        console.log(`Hello, ${names}`);
    }
    // Check if the input is an array of strings
    else if (Array.isArray(names)) {
        names.forEach(name => {
            console.log(`Hello, ${name}`);
        });
    } else {
        console.log("Invalid input. Please provide a string or an array of strings.");
    }
}

// Example usage
greet("Alice");
greet(["Bob", "Charlie"]); 
                           
