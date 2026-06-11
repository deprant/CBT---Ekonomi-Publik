
function doGet() {
  return ContentService
    .createTextOutput("CBT API Active")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {

  try {

    const spreadsheet = SpreadsheetApp.openById(
      "1I6erjVyJ9blXs8Hit-FrbKNTgMw4Vx9Xt8bK3Gpdmho"
    );

    const sheet = spreadsheet.getSheetByName("Responses");

    const data = JSON.parse(e.postData.contents);

    // =========================
    // VALIDASI DATA DASAR
    // =========================
    const nama = data.nama || "";
    const nim = data.nim || "";
    const kelas = data.kelas || "";
    const score = data.score || 0;

    const mcq = data.jawaban || [];
    const essay = data.essay || [];

    // =========================
    // SIMPAN KE GOOGLE SHEETS
    // =========================
    sheet.appendRow([
      new Date(),
      nama,
      nim,
      kelas,
      score,
      JSON.stringify(mcq),
      JSON.stringify(essay)
    ]);

    // =========================
    // RESPONSE KE CLIENT
    // =========================
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Data tersimpan"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {

    // =========================
    // ERROR HANDLING
    // =========================
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
