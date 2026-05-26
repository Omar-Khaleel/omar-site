const copyButton = document.getElementById("copyBtc");
const btcAddress = document.getElementById("btcAddress");

if (copyButton && btcAddress) {
  copyButton.addEventListener("click", async () => {
    const address = btcAddress.textContent.trim();
    try {
      await navigator.clipboard.writeText(address);
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy BTC Address";
      }, 1500);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      setTimeout(() => {
        copyButton.textContent = "Copy BTC Address";
      }, 1500);
    }
  });
}
