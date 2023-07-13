/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Уважаемые клиенты",
    authors: "Мы приняли решение не осуществлять заправку на месте.",
    conferences:
      "Мы предлагаем забор картриджей в наш офис в связи с нашим стремлением обеспечить безопасность и защиту здоровья клиентов и окружающей среды. Мы глубоко беспокоимся о вредных веществах, используемых в процессе заправки, и предпочитаем масштабировать эту деятельность в специализированной среде, где мы можем контролировать и обрабатывать химические вещества и отходы более безопасным и экологически устойчивым образом.<p>Ваша безопасность и забота о окружающей среде - наш главный приоритет.</p>",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/warning.png",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Заправка картриджей",
    authors:
      "Цены на заправку картриджей варьируются в зависимости от модели картриджа.",
    conferences:
      "Мы предлагаем доступные и гибкие тарифы для всех наших клиентов. Мы используем только высококачественные расходные материалы, чтобы гарантировать отличное качество печати. Наши цены включают в себя заправку, проверку и тестирование картриджей.",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/ctrg.jpg",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title: "Ремонт и обслуживание оргтехники",
    authors:
      "Цены на ремонт могут различаться в зависимости от сложности поломки.",
    conferences:
      "Наша команда опытных техников готова предоставить вам профессиональный ремонт техники по разумным ценам. Мы предлагаем прозрачную систему цен, основанную на типе поломки и сложности ремонта. Перед началом работ мы предоставим вам оценку стоимости, чтобы вы всегда знали, чего ожидать.",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/printer.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title: "Продажа расходных матералов",
    authors:
      "У нас широкий ассортимент расходных материалов по доступным ценам.",
    conferences:
      "У нас вы найдете картриджи, тонеры, чернила и другие расходные материалы для большинства моделей принтеров и копировальных машин. Все наши продукты проходят тщательный контроль качества, чтобы гарантировать надежность и долговечность.",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/toner.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title: "Продажа Б/У оргтехники",
    authors:
      "Цены на бу технику зависят от модели, бренда и состояния устройства.",
    conferences:
      "Мы предлагаем привлекательные цены на качественную бу технику, которая проходит предварительную проверку и тестирование. Вы получаете возможность приобрести технику по более низким ценам без ущерба для производительности и надежности.",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/printer2.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({ image, title, authors, conferences, researchYr }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle text-center"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    <div class="rConferences"> ${conferences} 
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
