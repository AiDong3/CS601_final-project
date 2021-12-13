let img1 = document.querySelector('.img1')
        let img3 = document.querySelector('.img3')
        let img4 = document.querySelector('.img4')
        let img5 = document.querySelector('.img5')
        // 设置鼠标移动时触发的效果
        document.addEventListener('mousemove',e=>{
            // 获取鼠标的位置
            let mouseX = e.clientX
            let mouseY = e.clientY
            // 获取图片距离左侧和顶部的距离
            let img1x = img1.offsetLeft
            let img1y = img1.offsetTop

            let img3x = img3.offsetLeft
            let img3y = img3.offsetTop

            let img4x = img4.offsetLeft
            let img4y = img4.offsetTop

            let img5x = img5.offsetLeft
            let img5y = img5.offsetTop
            // 设置移动时的偏移量
            let diff1x = (mouseX-img1x)/45
            let diff1y = (mouseY-img1y)/45

            let diff3x = (mouseX-img3x)/18
            let diff3y = (mouseY-img3y)/18

            let diff4x = (mouseX-img4x)/30
            let diff4y = (mouseY-img4y)/30

            let diff5x = (mouseX-img5x)/8
            let diff5y = (mouseY-img5y)/8

            img1.style.transform = `translate(${diff1x}px,${diff1y}px)`
            img3.style.transform = `translate(${diff3x}px,${diff3y}px)`
            img4.style.transform = `translate(${diff4x}px,${diff4y}px)`
            img5.style.transform = `translate(${diff5x}px,${diff5y}px)`
        }) 