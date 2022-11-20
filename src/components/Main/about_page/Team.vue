<template>
    <div class="main-content">
        <div class="content">
            <h1>The MathWorld Team</h1>

            <div class="image">
                <div><img src="@/assets/assets/team.png" alt="" /></div>

                <div class="name">
                    <p>John Doe</p>
                    <p>Jane Doe</p>
                    <p>Mark Doe</p>
                </div>
            </div>

            <p>
                We are a company of teachers, administrators, students, parents
                and educational researchers.
            </p>
        </div>
    </div>
</template>

<style scoped>
.content {
    padding: 50px 0px 50px 0px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.content h1 {
    text-align: center;
}

.content p {
    text-align: center;
}

.content .button {
    display: flex;
    justify-content: center;
}
.image {
    width: 100%;
    margin-left: 8%;
}
.name {
    padding: 50px 0px 50px 0px;
    width: 100%;
    margin-left: 200px;
    display: flex;
    flex-direction: row;
    row-gap: 20px;
    column-gap: 280px;
    text-transform: uppercase;
}
</style>
