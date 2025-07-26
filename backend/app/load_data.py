import pandas as pd
from sqlalchemy.orm import Session
from .database import engine, SessionLocal
from .models import Base, Product

def load_products_from_csv(file_path: str):
    Base.metadata.create_all(bind=engine)
    df = pd.read_csv(file_path)

    session = SessionLocal()
    for _, row in df.iterrows():
        product = Product(
            name=row['name'],
            category=row['category'],
            price=row['price'],
            stock=row['stock']
        )
        session.add(product)
    session.commit()
    session.close()

# Usage
if __name__ == "__main__":
    load_products_from_csv("path/to/products.csv")
