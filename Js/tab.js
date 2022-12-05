function setupTabs(){
    document.querySelectorAll(".tab__links").forEach(button => {
        button.addEventListener('click', () => {
          
         const tabContainer = button.parentElement;
         const tabType = button.dataset.forTab;
         const mainContainer = tabContainer.parentElement;
         const tabToActivate = mainContainer.querySelector(`.calculator[data-tab="${tabType}"]`);

         tabContainer.querySelectorAll(".tab__links").forEach(button => {
            button.classList.remove("tab__links--active");
         });
         mainContainer.querySelectorAll(".calculator").forEach(tab => {
            tab.classList.remove("calculator--active");
         });
         tabToActivate.classList.add("calculator--active");
         button.classList.add("tab__links--active");

        });
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll(".tab").forEach(tabContainer => {
        
        tabContainer.querySelector(".tab .tab__links").click();

    });
});