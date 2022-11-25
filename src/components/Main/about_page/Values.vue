<template>
    <div class="main-content">
        <div class="image">
            <img src="@/assets/assets/picture.png" alt="" />
        </div>

        <div class="content">
            <div class="content-header">
                <h2>MathWorld Values</h2>
            </div>
            <div class="content-body">
                <p>
                    In MathWorld, we believe that effective learning takes place
                    when a learner answers questions, solve problems, create a
                    project and/or build a product.
                </p>
            </div>
        </div>
    </div>
</template>
>

<style scoped>
.main-content {
    padding: 100px 70px 50px 70px;
    display: flex;
}

.main-content .content,
.image {
    flex: 1;
}

.content {
    text-align: right;
    margin-right: 50px;
    margin-top: 100px;
}

.content .content-body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-left: 70px;
}

.main-content .image img {
    max-width: 100%;
}

.content .content-header {
    font-size: 1.2em;
}

.content .content-body {
    font-size: 1.2em;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}
</style>
