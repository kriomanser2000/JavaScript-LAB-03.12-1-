/*
Реалізуйте клас PrintMaсhine, який складається з:
розміру шрифту;
кольори шрифту;
сімейства шрифту;
методу print(), який приймає текст і друкує його відпо-
відним шрифтом за допомогою document.write().
Створіть об’єкт такого класу та продемонструйте роботу ме-
тоду.
*/
//--
/*
class PrintMachine 
{
    constructor(fontSize, fontColor, fontFamily) 
    {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }
    print(text) 
    {
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
    }
}
const printer = new PrintMachine("16px", "blue", "Arial");
printer.print("Above the Infinity of Freedom.");
*/


/*
Реалізуйте клас, що описує новину (заголовок, текст, масив
тегів, дата публікації). У класі необхідно реалізувати один метод
print, який виводить всю інформацію у такому вигляді, як на
рисунку 1.
Зверніть увагу, як виводиться дата:
якщо з дати публікації пройшло менше дня, то виводиться
«сьогодні»;
якщо з дати публікації пройшло менше тижня, то виво-
диться «N днів тому»;
в інших випадках – повна дата у форматі «день.місяць.
рік».
*/
//--
/*
class News
{
    constructor(title, text, tags, publicDate)
    {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicDate = publicDate;
    }
    print()
    {
        const currDate = new Date();
        const timeDiff = currDate.getTime() - this.publicDate.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const oneWeek = oneDay * 7;
        let formatDate;
        if (timeDiff < oneDay)
        {
            formatDate = 'today';
        }
        else if(timeDiff < oneWeek)
        {
            const daysAgo = Math.floor(timeDiff / oneDay);
            formatDate = `${daysAgo} days ago.`;
        }
        else
        {
            const options = {day: 'numeric', month: 'numeric', year: 'numeric'};
            formatDate = this.publicDate.toLocaleDateStr('uk-UA', options);
        }
        console.log(`Title: ${this.title}`);
        console.log(`Text: ${this.text}`);
        console.log(`Tags: ${this.tags.join(', ')}`);
        console.log(`Public Date: ${this.formatDate}`);
    }
}
const news = new News('News about JS', 'JS is good language for coding!', ['JS', 'coding'], '2024-03-10T12:00:00');
news.print();
*/

/*
Реалізуйте клас, що описує стрічку новин.
Клас має містити:
масив новин;
get-властивість, яка повертає кількість новин;
метод виведення на екран усіх новин;
метод додавання новини;
метод видалення новини;
метод сортування новин за датою (від останніх новин до
старих);
метод пошуку новин за тегом (повертає масив новин, в
яких вказано переданий тег у метод).
Продемонструйте роботу написаних методів
*/
//--
class News
{
    constructor()
    {
        this.newsArray = [];
    }
    get count()
    {
        return this.newsArray.length;
    }
    displayAll()
    {
        this.newsArray.forEach(news =>
            {
                console.log(news);
            })
    }
    addNews(newsItem)
    {
        this.newsArray.push(newsItem);
    }
    removeNews(newsItems)
    {
        const index = this.newsArray.indexOf(newsItems);
        if(index !== -1)
        {
            this.newsArray.splice(index, 1);
        }
    }
    sortByDate()
    {
        this.newsArray.sort((a, b) =>
        {
            return new Date(b.date) - new Date(a.date);
        });
    }
    searchByTag(tag)
    {
        return this.newsArray.filter(news =>
            {
                return news.tags.includes(tag);
            });
    }
}
const newsFeed = new News();
newsFeed.addNews(
    {
        title: "New article",
        content: "New article about JS.",
        date: "2024-03-05",
        tags: ["JS", "coding"]
    });
newsFeed.addNews(
    {
        title: "Sasa love",
        content: "Sasa love listening Whisper of Runes.",
        date: "2024-03-08",
        tags: ["News", "Live"]
    });
newsFeed.addNews(
    {
        title: "M8L8TH",
        content: "Aleksei Levkin going to Belgorod)).",
        date: "2024-03-12",
        tags: ["News", "Ukraine"]
    });
console.log("\nSearch news in tag 'Live': ");
const liveNews =  newsFeed.searchByTag("Live");
console.log(liveNews);
console.log("\nSearch news in tag 'JS': ");
const jsNews =  newsFeed.searchByTag("JS");
console.log(jsNews);
console.log("\nSearch news in tag 'Ukraine': ");
const uaNews =  newsFeed.searchByTag("Ukraine");
console.log(uaNews);