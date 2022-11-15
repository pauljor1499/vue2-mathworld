<template>
    <div class="main-container">
        <form class="main-form">
            <div class="header">
                <h3>Create New Account</h3>
            </div>
            <div class="form-body">
                <div class="error-message" v-if="show_error_message">
                    <span>Invalid account to register.</span>
                    <button @click="show_error_message = !show_error_message">
                        <v-icon>mdi-close-circle-outline</v-icon>
                    </button>
                </div>
                <div>
                    <div class="rows-two">
                        <v-text-field
                            v-model="first_name"
                            :error-messages="first_nameErrors"
                            :counter="10"
                            label="First name"
                            outlined
                            required
                            @input="$v.first_name.$touch()"
                            @blur="$v.first_name.$touch()"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="middle_name"
                            :counter="10"
                            label="Middle name (Optional)"
                            outlined
                        >
                        </v-text-field>
                    </div>

                    <div class="rows-two">
                        <v-text-field
                            v-model="last_name"
                            :error-messages="last_nameErrors"
                            :counter="10"
                            label="Last name"
                            outlined
                            required
                            @input="$v.last_name.$touch()"
                            @blur="$v.last_name.$touch()"
                        >
                        </v-text-field>

                        <v-select
                            v-model="select"
                            :items="items"
                            :error-messages="selectErrors"
                            label="I registered as..."
                            flat
                            outlined
                            solo
                            required
                            @change="$v.select.$touch()"
                            @blur="$v.select.$touch()"
                        >
                        </v-select>
                    </div>

                    <v-text-field
                        v-model="school"
                        :error-messages="schoolErrors"
                        label="School"
                        outlined
                        required
                        @input="$v.school.$touch()"
                        @blur="$v.school.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        placeholder="sample@email.com"
                        outlined
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                    >
                    </v-text-field>

                    <v-text-field
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
                    @click="submit"
                >
                    <span>CREATE ACCOUNT</span>
                </v-btn>
            </div>
        </form>
    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        first_name: { required, maxLength: maxLength(10) },
        middle_name: { maxLength: maxLength(10) },
        last_name: { required, maxLength: maxLength(10) },
        select: { required },
        school: { required },
        email: { required, email },
        password: { required },
    },

    data: () => ({
        first_name: "",
        middle_name: "",
        last_name: "",
        select: null,
        school: "",
        email: "",
        password: "",
        items: ["Student", "Teacher"],
        show_eye: false,
        show_error_message: false,
    }),

    computed: {
        first_nameErrors() {
            const errors = [];
            if (!this.$v.first_name.$dirty) return errors;
            !this.$v.first_name.maxLength &&
                errors.push("First name must be at most 10 characters long");
            !this.$v.first_name.required &&
                errors.push("First name is required.");
            return errors;
        },
        last_nameErrors() {
            const errors = [];
            if (!this.$v.last_name.$dirty) return errors;
            !this.$v.last_name.maxLength &&
                errors.push("Last name must be at most 10 characters long");
            !this.$v.last_name.required &&
                errors.push("Last name is required.");
            return errors;
        },
        selectErrors() {
            const errors = [];
            if (!this.$v.select.$dirty) return errors;
            !this.$v.select.required && errors.push("Item is required");
            return errors;
        },
        schoolErrors() {
            const errors = [];
            if (!this.$v.school.$dirty) return errors;
            !this.$v.school.required && errors.push("School is required.");
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
            if (this.show_error_message === false)
                this.show_error_message = true;
        },
    },
};
</script>
<style scoped>
.main-container {
    max-width: 100%;
    padding: 50px;
    background-color: #0091de;
}

.main-form {
    max-width: 50%;
    background-color: #ffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);

    padding: 50px;
    border-radius: 10px;
    margin: auto;
}

h3,
span {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

.rows-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
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
