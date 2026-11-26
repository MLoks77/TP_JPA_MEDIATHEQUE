// service

const API_URL = "http://localhost:8080";

// film
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

// films par id
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

// acteurs
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

// acteurs par code
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

// genres
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

// reals
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

// reals par id
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

// médiathèques (chaque médiathèque contient la liste de ses films)
export async function getMediatheques() {
  try {
    const reponse = await fetch(`${API_URL}/api/mediatheques`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error('Erreur lors de la récupération des médiathèques');
    }

    return await reponse.json(); // renvoit le json des médiathèques
  } catch (error) {
    console.error('Erreur API médiathèques :', error);
    return [];
  }
}

// médiathèque par id
export async function getMediathequeById(id) {
  try {
    const reponse = await fetch(`${API_URL}/api/mediatheques/${id}`, {
      cache: 'no-store',
    });

    if (!reponse.ok) {
      throw new Error(`Erreur lors de la récupération de la médiathèque avec l'ID ${id}`);
    }

    // le back renvoie un corps vide si l'id n'existe pas
    const texte = await reponse.text();
    return texte ? JSON.parse(texte) : null; // renvoit le json de la médiathèque
  } catch (error) {
    console.error(`Erreur API médiathèque avec l'ID ${id} :`, error);
    return null;
  }
}


