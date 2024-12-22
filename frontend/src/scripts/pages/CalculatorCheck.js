const CalculatorCheck = {
  async render() {
    const category = sessionStorage.getItem('selectedCategory') || 'Umum';
    return `
      <section id="nutrition-form">
        <button id="back-button" class="back-button">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <h2>Check Status Gizi (${category})</h2>
        <p>Pastikan untuk memasukkan data yang relevan dan akurat agar hasil yang diberikan sesuai dengan kondisi tubuhmu.</p>
        <form id="checkForm">
          <label for="name">Nama:</label>
          <input type="text" id="name" required>

          <div class="form-row">
            <div>
              <label for="gender">Jenis Kelamin:</label>
              <select id="gender" required>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div>
              <label for="age">Usia:</label>
              <input type="number" id="age" required>
            </div>
          </div>

          <div class="form-row">
            <div>
              <label for="weight">Berat Badan (kg):</label>
              <input type="number" id="weight" required>
            </div>
            <div>
              <label for="height">Tinggi Badan (cm):</label>
              <input type="number" id="height" required>
            </div>
          </div>

          <button type="submit">Cek</button>
        </form>
      </section>
    `;
  },

  async afterRender() {
    document.getElementById('checkForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value) / 100;
      const bmi = (weight / (height * height)).toFixed(2);

      sessionStorage.setItem('bmiResult', JSON.stringify({ name, bmi }));
      window.location.hash = '#/results-check';
    });

    const backButton = document.getElementById('back-button');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.hash = '/check';
      });
    }
  },
};

export default CalculatorCheck;
