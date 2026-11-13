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

export async function getFilmsById(id) {
  try {
    const reponse = await fetch(`${API_URL}/api/films/${id}`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error(`Erreur lors de la récupération du film avec l'ID ${id}`);
    }

    return await reponse.json(); // renvoit le json du film
  } catch (error) {
    console.error(`Erreur API Film avec l'ID ${id} :`, error);
    return null;
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

export async function getActeursByCode(code) {
  try {
    const reponse = await fetch(`${API_URL}/api/acteurs/${code}`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des acteurs par code');
    }

    return await reponse.json(); // renvoit le json des acteurs
  } catch (error) {
    console.error('Erreur API acteurs par code:', error);
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

export async function getRealisateursById(id) {
  try {
    const reponse = await fetch(`${API_URL}/api/realisateurs/${id}`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des realisateurs par code');
    }

    return await reponse.json(); // renvoit le json des realisateurs
  } catch (error) {
    console.error('Erreur API realisateurs par code:', error);
    return [];
  }
}


