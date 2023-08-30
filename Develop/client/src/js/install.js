const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); // Prevent the default install prompt
  deferredPrompt = event; // Store the event for later use
  butInstall.style.display = "block"; // Display the install button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the install prompt
    const result = await deferredPrompt.userChoice; // Wait for user choice
    if (result.outcome === "accepted") {
      console.log("PWA installation accepted");
    } else {
      console.log("PWA installation rejected");
    }
    deferredPrompt = null; // Reset the deferredPrompt
    butInstall.style.display = "none"; // Hide the install button
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed successfully");
});
