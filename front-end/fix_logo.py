from PIL import Image

def fix_transparency(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Heavily target any light/white pixels for transparency
        # If the pixel is very bright, it's likely part of the white background
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Auto-crop the transparency
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")

if __name__ == "__main__":
    # Fix the current nav logo
    fix_transparency("public/logo-nav.png", "public/logo-nav.png")
    print("Fixed transparency directly on logo-nav.png")
