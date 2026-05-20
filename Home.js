
//button for Language
const button = document.getElementById('Translate');
const summary = document.getElementById('summary');
const Lang = document.getElementById('Lang');
const translations = {
    gr: ` Γεννήθηκα και μεγάλωσα στην Αλεξανδρούπολη και είμαι απόφοιτος του Τμήματος Πληροφορικής του
          Δημοκριτείου Πανεπιστημίου Θράκης. Με ενδιαφέρει ιδιαίτερα ο τομέας του προγραμματισμού και της
          ανάπτυξης web εφαρμογών, με στόχο να εξελιχθώ ως Software Engineer. 
 
          Έχω εμπειρία στον προγραμματισμό, την ανάπτυξη ιστοσελίδων και βασική κατανόηση του IT and networks.
          Μέσω ακαδημαϊκών και προσωπικών έργων, έχω αναπτύξει πρακτικές δεξιότητες στην κατασκευή εφαρμογών λογισμικού.
          Μαθαίνω συνεχώς νέες τεχνολογίες και βελτιώνω τις δεξιότητές μου, καθώς εξελίσσομαι στον χώρο της ανάπτυξης λογισμικού.`,


    en: ` I was born and raised in Alexandroupolis and i am a graduate of the Department of Computer Science of the
          Democritus University of Thrace. I am particularly interested in the field of programming and
          web application development, with the aim of developing as a Software Engineer. 

          I have experience in programming, web development, and a basic understanding of IT and networks.
          Through academic and personal projects, I have developed practical skills in building software applications.
          I am constantly learning new technologies and improving my skills as I progress in the software development field.`};



// default state
let lang = 'en';

// initial render
summary.textContent = translations[lang];

Lang.addEventListener('change', () => {
    lang = Lang.value === 'Greek' ? 'gr' : 'en';
    summary.textContent = translations[lang];
    button.textContent = lang === 'gr' ? 'Greek' : 'English';
})



/* 
button.textContent='English';
button.addEventListener('click', () => {
    lang = lang === 'gr' ? 'en' : 'gr';

    summary.textContent = translations[lang];
    button.textContent = lang === 'gr' ? 'Greek' : 'English';
});

*/
/* my Version i thought for start
button.addEventListener('click', function (e) {
    if (button.innerText === 'EN') {
        button.innerText = 'GR'
        summary.innerText = `
                     Γεννήθηκα και μεγάλωσα στην Αλεξανδρούπολη και είμαι απόφοιτος του Τμήματος Πληροφορικής του
                    Δημοκριτείου Πανεπιστημίου Θράκης.Με ενδιαφέρει ιδιαίτερα ο τομέας του προγραμματισμού και της
                    ανάπτυξης web εφαρμογών, με στόχο να εξελιχθώ ως Software Engineer. 

                    Διαθέτω γνώσεις σε HTML, CSS, JavaScript και MySQL, ενώ έχω ασχοληθεί με ακαδημαϊκά και προσωπικά
                    projects που με βοήθησαν να αναπτύξω πρακτικές δεξιότητες.Επιδιώκω συνεχώς να βελτιώνομαι, να
                    μαθαίνω νέες τεχνολογίες και να εξελίσσομαι στον χώρο της ανάπτυξης λογισμικού.`
    } else {
        button.innerText = 'EN'
        summary.innerText = `I was born and raised in Alexandroupolis and I am a graduate of the Department of Informatics of Democritus University of Thrace.
         I am particularly interested in the fields of programming and web application development, with the aim of becoming a Software Engineer.

         I have knowledge in HTML, CSS, JavaScript and MySQL, while I am involved in academic and personal projects that have helped me develop practical skills. 
         I constantly strive to improve, learn new technologies and evolve in the field of software development.`

    }
})
*/




//skills
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll('.progress').forEach(el => {
    observer.observe(el);
});



