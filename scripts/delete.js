export async function deleteSong(songId) {
  if (!confirm("Are you sure you want to delete this song?")) return;
  try {
    const response = await fetch(
      `https://sdev200-module05-backend.onrender.com/api/songs/${songId}`,
      {
        // const response = await fetch(`http://localhost:3000/api/songs/${songId}`, {
        method: "DELETE",
      },
    );
    if (response.ok) {
      alert("Song deleted successfully");
      window.location.reload();
    } else {
      document.querySelector("#error").innerHTML = "Unable to delete the song";
    }
  } catch (err) {
    console.error("Error deleting song: ", err);
  }
}