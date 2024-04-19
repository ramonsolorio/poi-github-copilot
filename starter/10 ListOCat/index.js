//Create a web site that consumes the cat facts from https://catfact.ninja/ displays a list and shows a specific page if you click in a list item
fetch('https://catfact.ninja/facts?limit=5')
    .then(response => response.json())
    .then(data => {
        const facts = data.data;
        const list = document.getElementById('cat-facts-list');

        // Create a list item for each fact
        facts.forEach(fact => {
            const listItem = document.createElement('li');
            listItem.textContent = fact.fact;
            listItem.addEventListener('click', () => showFactDetail(fact));
            list.appendChild(listItem);
        });
    });

// Show the detail of a fact
function showFactDetail(fact) {
    const detailDiv = document.getElementById('fact-detail');
    detailDiv.textContent = `Fact: ${fact.fact}\nLength: ${fact.length}`;
}