fetch("../../resume.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (resumes) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let resume of resumes) {
      out += `
        <tr>
            <td class="image" rowspan="2"><img src='${resume.image}'></td>
            <td class="name">${resume.name}</td>
        </tr>
        <tr class="border-bottom">
            <td class="resume"><iconify-icon icon="carbon:quotes" width="45" height="45"></iconify-icon><br>${resume.resume}</td>
        </tr>
        `;
    }
    placeholder.innerHTML = out;
  })
  .catch(function (error) {
    console.error("Error fetching the data:", error);
    // Handle errors or display an error message in the DOM as needed
  });
