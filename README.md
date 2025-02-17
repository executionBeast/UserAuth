JWT

header.payload.signature
JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized

Serialized --> [header].[payload].[signature]

Header :  {
    "typ":"JWT",
    "alg":"HS256"
 }
 HS256 and RS256

Payload :  {
     "userId":"b07f85be-45da",
     "iss": "https://provider.domain.com/",
     "sub": "auth/some-hash-here",
     "exp": 153452683
 }

Hashing/ Signature : 
3. Signature
This is the third part of JWT and used to verify the authenticity of token. BASE64URL encoded header and payload are joined together with dot(.) and it is then hashed using the hashing algorithm defined in a header with a secret key. This signature is then appended to header and payload using dot(.) which forms our actual token header.payload.signature

HASHINGALGO( base64UrlEncode(header) + “.” + base64UrlEncode(payload),secret)

/signup route pe user payload aayega usko lekar jwt token banana hai


Routes:
    POST /signup
    GET /login
    GET /user


Thank you for your interest in our internship opening. As a next step, we are expecting you to complete a short assignment.

Create a small web application (backend) in expressjs for submitting user information (username, password, full name, gender, date of birth, country) and then store them in the database. the above process registers the user, additionally search the user by username or email, then retrieve their full info after login to the system. use expressjs, mongodb. use postman to demonstrate how APIs work. after completing the project upload it to your github repo, and give a full video walkthrough of how it works (source codes, output, postman result, database). use JWT token to handle the auth. 

3 end points -> user registration, user login, search user, 
techstack to use -> expressjs (nodejs), mongodb, jwt
it's important to structure the source codes, name properly, enforce data validation in server side. 

Thanks,
Vipa
Submission deadline: 14 February, 2025