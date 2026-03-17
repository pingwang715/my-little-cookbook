CREATE TABLE IF NOT EXISTS ingredients
(
    ingredient_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS recipes
(
    recipe_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(250)                            NOT NULL,
    image_url   VARCHAR(250)                            NOT NULL,
    country     VARCHAR(250)                            NOT NULL,
    type        VARCHAR(250)                            NOT NULL,
    created_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP   NOT NULL,
    created_by  VARCHAR(20)                             NOT NULL,
    updated_at  TIMESTAMP   DEFAULT NULL,
    updated_by  VARCHAR(20) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
    recipe_ingredient_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    recipe_id BIGINT,
    ingredient_id BIGINT,
    quantity DECIMAL(6,2),
    unit VARCHAR(50),
    notes VARCHAR(50),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE IF NOT EXISTS instructions (
    instruction_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    recipe_id BIGINT,
    step_number INTEGER,
    description VARCHAR(500),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id) ON DELETE CASCADE
);
