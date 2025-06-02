document.getElementById("startBtn").addEventListener("click", () => {
  const topNotes = getCheckedValues(["pineapple", "bergamot", "apple", "blackcurrant"]);
  const middleNotes = getCheckedValues(["birch", "patchouli", "moroccan-jasmine", "rose"]);
  const baseNotes = getCheckedValues(["musk", "oakmoss", "ambergris", "vanille"]);

  document.getElementById("topNoteText").textContent = topNotes.join(", ") || "-";
  document.getElementById("middleNoteText").textContent = middleNotes.join(", ") || "-";
  document.getElementById("baseNoteText").textContent = baseNotes.join(", ") || "-";

  // Sembunyikan form dan tombol start
  document.getElementById("noteForm").classList.add("hidden");

  // Tampilkan hasil
  const result = document.getElementById("result");
  result.classList.remove("hidden");
  setTimeout(() => {
    result.classList.remove("opacity-0", "translate-y-5");
  }, 10); // Trigger animasi
});

function getCheckedValues(ids) {
  return ids
    .map(id => document.getElementById(id))
    .filter(el => el.checked)
    .map(el => el.value);
}

document.getElementById("resetBnt").addEventListener("click", () => {
  // Reset form
  document.getElementById("noteForm").reset();
  document.getElementById("noteForm").classList.remove("hidden");

  // Sembunyikan hasil
  const result = document.getElementById("result");
  result.classList.add("opacity-0", "translate-y-5");
  setTimeout(() => {
    result.classList.add("hidden");
  }, 500);
});
