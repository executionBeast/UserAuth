import Joi from "joi";

const validator = (schema) => (payload) => schema.validate(payload, {abortEarly: false});

const userSchemaJoi = Joi.object(
    {
        username:Joi.string()
                    .min(3)
                    .max(40)
                    .required(),
        
        fullname:Joi.string()
                    .min(3)
                    .max(40)
                    .required(),
        email:Joi.string()
                 .email()
                 .required(),
        gender:Joi.string()
                  .valid('Male', 'Female', 'Other')
                  .required(),  
        dob:Joi.date()
               .greater('1-1-1925')
               .less('12-31-2020')
               .required(),
        country:Joi.string()
                   .min(3)
                   .max(20)
                   .required(),
        password:Joi.string()
                    .min(6)
                    .max(16)
                    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                    .required(),
    }
)

export const validateUser = validator(userSchemaJoi); 
