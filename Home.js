const summary = document.getElementById('summary');
const btnEn = document.getElementById("btn-en");
const btnGr = document.getElementById("btn-gr");

const translations = {
    gr: `Απόφοιτος Πληροφορικής από το Δημοκρίτειο Πανεπιστήμιο Θράκης με έντονο ενδιαφέρον για την ανάπτυξη λογισμικού και διαδικτυακών εφαρμογών.
          Έμπειρος στην κατασκευή διαδικτυακών εφαρμογών μέσω ακαδημαϊκών και προσωπικών έργων χρησιμοποιώντας σύγχρονες τεχνολογίες ιστού. 
        Επιπλέον, έχω βασική κατανόηση συστημάτων πληροφορικής, βάσεων δεδομένων και δικτύων υπολογιστών.`,


    en: ` Computer Science graduate from the Democritus University of Thrace with
           a strong interest in software and web application development.
           Experienced in building web applications through academic and personal
           projects using modern web technologies. Additionally, I have a basic
           understanding of IT systems, databases, and computer networks.`
};



// default state
let lang = 'en';

// initial render
summary.textContent = translations[lang];

btnEn.addEventListener("click", () => {
    lang = "en";
    summary.textContent = translations[lang];

    btnEn.classList.add("btn-light");
    btnEn.classList.remove("btn-outline-light");

    btnGr.classList.add("btn-outline-light");
    btnGr.classList.remove("btn-light");
});

btnGr.addEventListener("click", () => {
    lang = "gr";
    summary.textContent = translations[lang];

    btnGr.classList.add("btn-light");
    btnGr.classList.remove("btn-outline-light");

    btnEn.classList.add("btn-outline-light");
    btnEn.classList.remove("btn-light");
});



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



