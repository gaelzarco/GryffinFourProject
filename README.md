# GryffinFourProject
Milestone Project 2

## Project Routes (currently)
| Method | Path | Purpose |
|---------|-----------|----------|
| GET | / | Homepage with display of categories |
| GET | /:categoryId | Individual category view |
| GET | /:categoryId/:madlibId | Individual Madlib View |
| POST | /new | form for creating new madlib  |

## Genre Data Scheme
| Field | Type |
|---|---|
|Name|(string)|


## Madlib Data Scheme
| Field | Type |
| ---- | ---- |
| Name | (String) |
| Author | (String) |
| Genre | (ObjectId) |
| story | (String) |