# -*- coding: utf-8 -*-
import numpy as np
import cv2
from flask import Flask, render_template, request


# 全ての画像に共通する処理を行う


def imgCommonfunc(img):
    gray = cv2.imread(img, 0)
    return gray

# ガウシアンフィルタ処理


def gaussian(img):
    gaussian_img = cv2.GaussianBlur(img, ksize=(3, 3), sigmaX=1.3)
    return gaussian_img

# ラプラシアンフィルタ処理


def laplacian(img):
    laplacian_img = cv2.Laplacian(img, cv2.CV_32F, ksize=3)
    return laplacian_img

# メディアンフィルタ処理


def median(img):
    median_img = cv2.median(img, ksize=3)
    return median_img

# ソーベルフィルタ処理


def sobel(img):
    sobel_img = cv2.Sobel(img, cv2.CV_32F, 1, 0, ksize=3)
    return sobel_img

# Cannyアルゴリズム


def canny(img):
    canny_img = cv2.Canny(img, 100, 200)
    return canny_img


app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

# main関数
@app.route('/', methods=['POST', 'GET'])
def main():
    if request.method == "POST":
        image = request.files['photo'].stream
        types = request.form["type"]
        image = np.asarray(bytearray(image.read()), dtype=np.uint8)
        # encodeしたものを再びdecodeする
        image = cv2.imdecode(image, 1)
        if types == "Canny":
            image = canny(image)
        elif types == "Laplacian":
            image = laplacian(image)
        elif types == "Sobel":
            image = sobel(image)
        imagename = types + "test.jpg"
        cv2.imwrite(imagename, image)
    else:
        pass
    return render_template("index.html")

    """
    img = "/Users/rem_0202/Downloads/resize.jpeg"
    img = imgCommonfunc(img)
    
    g = gaussian(img)
    m = median(img)
    l = laplacian(img)
    s = sobel(img)
    c = canny(img)
    cv2.imwrite("laplacian.jpg", l)
    cv2.imwrite("median.jpg", m)
    cv2.imwrite("gaussian.jpg", g)
    cv2.imwrite("sobel.jpg", l)
    cv2.imwrite("canny.jpg", l)
    """


if __name__ == "__main__":
    main()
    # app.run()
    """
       app.debug = True
       app.run(host='0.0.0.0', port=8000)
       """
