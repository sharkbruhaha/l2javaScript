Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on("renderMyActorSheet", (app, html) => {
    console.log("Modifying Actor Sheet");

    // Get current Actor
    const currentActor = app.object;

    // My field
    const myField = document.createElement("input");
    myField.type = "text";
    myField.id = "Ancestry";
    myField.value = currentActor.getFlag("module-name", "flag-name");
    myField.placeholder = "Ancestry HERE Placeholder";
    myField.name = `flags.${"module-name"}.${"flag-name"}`;

    // Add to Actor Sheet
    html[0].querySelector("mySelector").append(myField);
});