export async function fetchWordPressPosts() {
    const res = await fetch("https://wp.jazzfresno.net/wp-json/wp/v2/posts?_embed");
    if (!res.ok) throw new Error("Gagal fetch post dari WordPress");
    return await res.json();
  }  