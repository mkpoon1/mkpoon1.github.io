const schools = [
      {
        name: "School of Law",
        image: "images/law-menu.png",
        owner: "Mary Simon",
        email: "msimon1@school.edu"
      },
      {
        name: "School of Medicine",
        image: "images/med-menu.png",
        owner: "Jordan Lee",
        email: "jlee@school.edu"
      },
      {
        name: "School of Nursing",
        image: "images/nursing-menu.png",
        owner: "Cherie Morgan",
        email: "cmorgan@school.edu"
      },
      {
        name: "School of Pharmacy",
        image: "images/pharm-menu.png",
        owner: "Carey White",
        email: "cwhite@school.edu"
      }
    ];

    const menuList = document.querySelector("#menuList");
    const dataSteward = document.querySelector("#dataSteward");

    schools.forEach((school, index) => {
        const option = document.createElement("button");
        option.className="menu-options";
        option.type="button";
        option.innerHTML = `
           <img src="${school.image}" alt="${school.name}"> 
           <span>${school.name}</span>
    `;

    option.addEventListener("click", () => {
        document.querySelectorAll(".menu-options").forEach(item => {
            item.classList.remove("selected");
        });


        option.classList.add("selected");


    dataSteward.innerHTML = `
        <h2>${school.name}</h2>
        <p><strong>Data Steward:</strong> ${school.owner}</p>
        <p><strong>Email:</strong> ${school.email}</p>
    `;

   });



    schoolList.appendChild(option);

    if (index === 0) {
        option.click();
    }
 });