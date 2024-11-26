/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length / 2; j++) {
            let temp = (image[i][j] - 1) * -1;
            image[i][j] = (image[i][image[i].length - 1 - j] - 1) * -1;
            image[i][image[i].length - 1 - j] = temp;
        }
    }
    return image;
};
