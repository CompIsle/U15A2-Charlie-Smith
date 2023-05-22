export async function load() {
    const files = import.meta.glob("$lib/assets/employees/*.jpg");
    let images = [];
    let id = 0;
    for (const i in files) {
        await files[i]().then(({ default: imageUrl }) => {
            let name = imageUrl.slice(26,-4)
            images.push({id,name,imageUrl});
            id++
        });
    };
    return {
        images
    };
}