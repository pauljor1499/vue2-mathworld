<template>
    <div class="main-content">
        <div class="content">
            <h1>The MathWorld Team</h1>

            <div class="image">
                <div><img src="@/assets/assets/team.png" alt="" /></div>

                <div class="name">
                    <div>
                        <strong style="margin-left: 130px">JOHN DOE</strong>
                        <p style="margin-left: 130px">Founder</p>
                    </div>
                    <div>
                        <strong style="margin-left: 150px">JANET DOE</strong>
                        <p style="margin-left: 130px">Marketing Head</p>
                    </div>
                    <div>
                        <strong style="margin-left: 100px">MARK DOE</strong>
                        <p style="margin-left: 70px">Supporting Manager</p>
                    </div>
                </div>
            </div>

            <p class="message">
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
    padding-left: 5%;
    padding-right: 5%;
}
.name {
    display: flex;
    text-transform: capitalize;
    flex: 3;
    flex-direction: row;
    column-gap: 200px;
}
.message {
    margin-top: 30px;
    font-size: 18px;
}
</style>
