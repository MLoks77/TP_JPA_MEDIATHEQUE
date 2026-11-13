// service

const API_URL = "http://localhost:8080";

export async function getFilms() {
  try {
    const reponse = await fetch(`${API_URL}/api/films`, {
      cache: 'no-store', 
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des films');
    }

    return await reponse.json(); // renvoit le json des films
  } catch (error) {
    console.error('Erreur API Films :', error);
    return [];
  }
}

export async function getActeurs() {
  try {
    const reponse = await fetch(`${API_URL}/api/acteurs`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des acteurs');
    }

    return await reponse.json(); // renvoit le json des acteurs
  } catch (error) {
    console.error('Erreur API acteurs :', error);
    return [];
  }
}

export async function getGenres() {
  try {
    const reponse = await fetch(`${API_URL}/api/genres`, {
      cache: 'no-store', 
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des genres');
    }

    return await reponse.json(); // renvoit le json des genres
  } catch (error) {
    console.error('Erreur API genres :', error);
    return [];
  }
}

export async function getRealisateurs() {
  try {
    const reponse = await fetch(`${API_URL}/api/realisateurs`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des realisateurs');
    }

    return await reponse.json(); // renvoit le json des realisateurs
  } catch (error) {
    console.error('Erreur API realisateurs :', error);
    return [];
  }
}



