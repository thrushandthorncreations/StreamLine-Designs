/*
  ADDING A PROJECT:
  1. Duplicate one project object below.
  2. Change its id, title, category, description, and details.
  3. Put image/model files in the assets folders and enter their relative paths.
  4. Save this file and publish the updated site.

  Supported categories: Mechanical, Aerospace, Assemblies, Other
  Leave image/model/drawing as an empty string if you do not have that file yet.
*/
window.PORTFOLIO_PROJECTS = [
  {
    id: "sample-mechanical",
    title: "Precision Mechanical Component",
    category: "Mechanical",
    type: "PART DESIGN / CAD MODELING",
    summary: "A sample project card showing how an individual mechanical component will be presented.",
    overview: "Replace this sample text with the purpose of your project, the problem it addresses, and the intended function of the design.",
    process: "Describe your modeling approach, important design decisions, constraints, and iterations. You can explain what you learned or what you would improve in a future revision.",
    software: "Add CAD software",
    components: "Single part",
    material: "Add material",
    image: "",
    model: "",
    drawing: "",
    tags: ["3D Modeling", "Part Design"]
  },
  {
    id: "sample-aerospace",
    title: "Aerospace Design Study",
    category: "Aerospace",
    type: "CONCEPT / DESIGN STUDY",
    summary: "A sample aerospace project. Replace this card with one of your own designs when ready.",
    overview: "Introduce the design concept and explain what you set out to explore or accomplish.",
    process: "Describe the design process, geometry, key considerations, and any trade-offs you explored.",
    software: "Add CAD software",
    components: "Concept study",
    material: "Not specified",
    image: "",
    model: "",
    drawing: "",
    tags: ["Aerospace", "Concept"]
  },
  {
    id: "sample-assembly",
    title: "Mechanical Assembly",
    category: "Assemblies",
    type: "ASSEMBLY / EXPLODED VIEW",
    summary: "A sample multi-component assembly with room for an exploded view and interactive model.",
    overview: "Explain what the assembly does and how its components work together.",
    process: "Describe how the parts were modeled, constrained, fitted, and assembled. Add notes about motion or mechanisms where relevant.",
    software: "Add CAD software",
    components: "Multi-part assembly",
    material: "Multiple / TBD",
    image: "",
    model: "",
    drawing: "",
    tags: ["Assembly", "Exploded View"]
  },
  {
    id: "sample-documentation",
    title: "Technical Drawing Study",
    category: "Other",
    type: "TECHNICAL DOCUMENTATION",
    summary: "A sample documentation project for dimensioned drawings and engineering communication.",
    overview: "Explain what part or system the drawing documents and who might use the drawing.",
    process: "Describe the drawing standards, views, dimensions, tolerances, and documentation choices you made.",
    software: "Add CAD software",
    components: "Technical drawing",
    material: "Not applicable",
    image: "",
    model: "",
    drawing: "",
    tags: ["Drafting", "Documentation"]
  }
];
