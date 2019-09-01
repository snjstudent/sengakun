# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect, send_from_directory, send_file
import numpy as np
import cv2
import os
import string
import random


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


SAVE_DIR = "./image_maked"
if not os.path.isdir(SAVE_DIR):
    os.mkdir(SAVE_DIR)


app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")


@app.route('/')
def index():
    print("index")
    return render_template("index.html")


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
        save_path = os.path.join("./src/images/newimage" + ".png")
        cv2.imwrite(save_path, image)
        send_from_directory("./", save_path,
                            attachment_filename=save_path)
        """
        env = Environment(loader=FileSystemLoader("."))
        template = env.get_template("index.html")
        print(os.listdir(SAVE_DIR)[-1])
        return template.render(images=os.listdir(SAVE_DIR)[-1])
        """
        return render_template("index.html", imgs=save_path)

    else:
        print("main")
        pass
    return render_template("index.html")


if __name__ == "__main__":
    # for debug
    app.run(debug=True)
