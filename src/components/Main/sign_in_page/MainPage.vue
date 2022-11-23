<template>
    <div class="main-container">
        <form class="main-form">
            <div class="header">
                <h3>Login to MathWorld</h3>
            </div>
            <div class="form-body">
                <div class="error-message" v-if="show_error_message">
                    <span>Invalid username or password.</span>
                    <button @click="show_error_message = !show_error_message">
                        <v-icon>mdi-close-circle-outline</v-icon>
                    </button>
                </div>

                <div>
                    <v-select
                        id="select-role"
                        v-model="select"
                        :items="items"
                        :error-messages="selectErrors"
                        label="Log in as..."
                        flat
                        outlined
                        solo
                        required
                        @change="$v.select.$touch()"
                        @blur="$v.select.$touch()"
                    >
                    </v-select>

                    <v-text-field
                        id="input-email"
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        placeholder="sample@email.com"
                        outlined
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-text-field
                        id="input-password"
                        v-model="password"
                        :error-messages="passwordErrors"
                        :append-icon="show_eye ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show_eye ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        outlined
                        required
                        class="input-group--focused"
                        @click:append="show_eye = !show_eye"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                    >
                    </v-text-field>
                </div>
                <v-btn
                    x-large
                    color="#0091DE"
                    dark
                    class="submit-button"
                    @click="submit()"
                >
                    <span>LOG IN</span>
                </v-btn>
            </div>
        </form>
    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        select: { required },
        email: { required, email },
        password: { required },
    },

    data: () => ({
        select: null,
        email: "",
        password: "",
        items: ["Student", "Teacher"],
        show_eye: false,
        show_error_message: false,
    }),

    computed: {
        selectErrors() {
            const errors = [];
            if (!this.$v.select.$dirty) return errors;
            !this.$v.select.required && errors.push("Item is required");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Must be valid e-mail");
            !this.$v.email.required && errors.push("E-mail is required");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push("Password is required");
            return errors;
        },
    },

    methods: {
        submit() {
            this.$v.$touch();
            //for testing purposes
            if (
                this.select == "Teacher" &&
                this.email == "teacheremail@gmail.com" &&
                this.password == "Password2022!"
            ) {
                this.$router.push("/teacher");
            } else {
                this.show_error_message = true;
            }
        },
    },
};
</script>
<style scoped>
h3,
span {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.main-container {
    max-width: 100%;
    max-height: 100%;
    padding: 50px;
    background-color: #0091de;
}

.main-form {
    max-width: 450px;
    background-color: #ffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);

    margin: auto;
    padding: 50px;
    border-radius: 10px;
}

.header {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.form-body {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    margin: 50px 0px 20px 0px;
}

.submit-button {
    width: 100%;
    padding: 20px;
    font-size: 1.2em;
}

.error-message {
    padding: 20px;
    border: 1px solid #ff0000;
    background-color: #ffd1d1;
    overflow: hidden;
}

.error-message span {
    float: left;
}

.error-message button {
    float: right;
}
</style>
