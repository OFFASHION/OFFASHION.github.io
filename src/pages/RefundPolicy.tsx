import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="font-display text-4xl font-bold mb-8">Refund & Return Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Return Window</h2>
              <p className="text-muted-foreground">
                We offer a 30-day return policy from the date you receive your order. Items must be unworn, 
                unwashed, and in their original condition with all tags attached.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Eligible Items</h2>
              <p className="text-muted-foreground mb-4">
                Most items can be returned except:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Final sale items</li>
                <li>Intimate apparel and swimwear</li>
                <li>Personalized or customized items</li>
                <li>Beauty products and cosmetics</li>
                <li>Items without original tags</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Return Process</h2>
              <p className="text-muted-foreground mb-4">
                To initiate a return:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Log into your account and go to Order History</li>
                <li>Select the order and items you wish to return</li>
                <li>Print the prepaid return label</li>
                <li>Pack items securely in original packaging if possible</li>
                <li>Drop off at your nearest post office or courier service</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Return Shipping</h2>
              <p className="text-muted-foreground">
                Return shipping is free for most orders. We provide a prepaid return label via email. 
                International returns may be subject to additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                Once we receive your return:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We will inspect the items within 2-3 business days</li>
                <li>Approved refunds will be processed to your original payment method</li>
                <li>Refunds typically appear within 5-10 business days</li>
                <li>You will receive an email confirmation once processed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Exchanges</h2>
              <p className="text-muted-foreground">
                We offer free exchanges for different sizes or colors. Simply select "Exchange" when initiating 
                your return and choose your preferred replacement item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Damaged or Defective Items</h2>
              <p className="text-muted-foreground">
                If you receive a damaged or defective item, please contact us immediately with photos. 
                We will arrange for a replacement or full refund, including return shipping costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Wrong Item Received</h2>
              <p className="text-muted-foreground">
                If you receive the wrong item, please contact us within 7 days. We will send you the correct 
                item at no additional cost and provide a prepaid return label for the incorrect item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Late or Missing Refunds</h2>
              <p className="text-muted-foreground mb-4">
                If you haven't received your refund after 10 business days:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Check your bank account again</li>
                <li>Contact your credit card company (processing may take time)</li>
                <li>Contact your bank (processing delays can occur)</li>
                <li>If still not received, contact us at refunds@fashionova.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Sale Items</h2>
              <p className="text-muted-foreground">
                Sale items marked as "Final Sale" cannot be returned or exchanged. Regular sale items 
                (not marked Final Sale) can be returned according to our standard policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. International Returns</h2>
              <p className="text-muted-foreground">
                International customers are responsible for return shipping costs unless the item is 
                defective or incorrect. Customs duties are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground">
                For any questions about returns or refunds, please contact our customer service team 
                at returns@fashionova.com or call 1-800-FASHION.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;