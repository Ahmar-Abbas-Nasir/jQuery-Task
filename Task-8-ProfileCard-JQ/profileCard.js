const profileData = [
  {
    id: 1,
    name: "Jonas Schmedtmann",
    intro:
      "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
    image: "img.jpg",
    skills: [
      {
        name: "React",
        color: "light-blue",
        level: "Intermediate",
      },
      {
        name: "HTML+CSS",
        color: "blue",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        color: "yellow",
        level: "Intermediate",
      },
      {
        name: "Svelte",
        color: "orangered",
        level: "Beginner",
      },
    ],
  },
  {
    id: 2,
    name: "Sara Vieira",
    intro:
      "Developer Advocate at YLD and Speaker. I enjoy coding, traveling, and sharing knowledge with the community.",
    image: "img.jpg",
    skills: [
      {
        name: "React",
        color: "light-blue",
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        color: "yellow",
        level: "Intermediate",
      },
      {
        name: "GraphQL",
        color: "purple",
        level: "Advanced",
      },
      {
        name: "Node.js",
        color: "green",
        level: "Intermediate",
      },
    ],
  },
  {
    id: 3,
    name: "Chris Coyier",
    intro:
      "Web Developer, Writer, and Speaker. I love building things for the web and sharing what I learn through my blog and talks.",
    image: "img.jpg",
    skills: [
      {
        name: "HTML+CSS",
        color: "blue",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        color: "yellow",
        level: "Intermediate",
      },
      {
        name: "SVG",
        color: "goldish",
        level: "Intermediate",
      },
      {
        name: "WordPress",
        color: "blue",
        level: "Intermediate",
      },
    ],
  },
  {
    id: 4,
    name: "Ari Lerner",
    intro:
      "Software Engineer, Author, and Speaker. I specialize in building scalable web applications and teaching others how to do the same.",
    image: "img.jpg",
    skills: [
      {
        name: "Angular",
        color: "red",
        level: "Intermediate",
      },
      {
        name: "Node.js",
        color: "green",
        level: "Advanced",
      },
      {
        name: "TypeScript",
        color: "goldish",
        level: "Intermediate",
      },
      {
        name: "Docker",
        color: "blue",
        level: "Intermediate",
      },
    ],
  },
  {
    id: 5,
    name: "Ali Spittel",
    intro:
      "Senior Developer Advocate at AWS and Blogger. I'm passionate about education, accessibility, and building inclusive communities in tech.",
    image: "img.jpg",
    skills: [
      {
        name: "Python",
        color: "blue",
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        color: "yellow",
        level: "Intermediate",
      },
      {
        name: "React",
        color: "light-blue",
        level: "Intermediate",
      },
      {
        name: "AWS",
        color: "goldish",
        level: "Advanced",
      },
    ],
  },
];

let container = $("#container");

console.log(container);

profileData.forEach(data => {
  let newDiv = $("<div>").addClass("cards").html(`
    <img class="image" src="${data.image}" alt="Image not found">
    <div class="detail">
      <h1 class="name">${data.name}</h1>
      <p class="intro">${data.intro}</p>
    </div>
    <div class="skillDiv">
      <!-- Placeholder for skills -->
    </div>
  `);
  let skillDiv = newDiv.find(".skillDiv");
  data.skills.forEach((skill) => {
    let skillSpan = $("<span>").addClass(`skill ${skill.color} center`).text(`${skill.name} (${skill.level})`);
    skillDiv.append(skillSpan);
  });
  container.append(newDiv);
});