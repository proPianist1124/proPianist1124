main()
async function main(){
    const projects_response = await fetch("assets/src/data/projects.json")
    const projects_data = await projects_response.json()

    for(let i=0; i<projects_data.projects.length; i++){
        const projects = document.getElementById("projects")
        projects.innerHTML = `${projects.innerHTML}<a href = "${projects_data.projects[i].url}" target = "_blank"><div class = "card-hoverable">${projects_data.projects[i].name}</div></a>`
    }

    const socials_response = await fetch("assets/src/data/socials.json")
    const socials_data = await socials_response.json()

    for(let i=0; i<socials_data.socials.length; i++){
        const socials = document.getElementById("socials")
        socials.innerHTML = `${socials.innerHTML}<a href = "${socials_data.socials[i].url}"><button class = "${socials_data.socials[i].class}"><i class = "${socials_data.socials[i].icon}"></i></button></a><br>`
    }
}